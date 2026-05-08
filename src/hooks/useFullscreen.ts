import { useCallback, useEffect, useState } from "react";

const isIPhoneSafari = (): boolean => {
	if (typeof navigator === "undefined") return false;
	const ua = navigator.userAgent;
	const isIPhone = /iPhone|iPod/.test(ua);
	const isSafari = /Safari/.test(ua) && !/CriOS|FxiOS|EdgiOS/.test(ua);
	return isIPhone && isSafari;
};

const isStandalone = (): boolean => {
	if (typeof window === "undefined") return false;
	const navStandalone = (navigator as Navigator & { standalone?: boolean }).standalone === true;
	const matchStandalone = window.matchMedia?.("(display-mode: fullscreen), (display-mode: standalone)").matches;
	return navStandalone || matchStandalone;
};

const isFullscreenSupported = (): boolean => {
	if (typeof document === "undefined") return false;
	if (isIPhoneSafari() && !isStandalone()) return false;
	return (
		document.fullscreenEnabled ||
		(document as unknown as { webkitFullscreenEnabled?: boolean }).webkitFullscreenEnabled === true
	);
};

const getFullscreenElement = (): Element | null =>
	(typeof document !== "undefined" &&
		(document.fullscreenElement ||
			(document as unknown as { webkitFullscreenElement?: Element }).webkitFullscreenElement)) ||
	null;

export const useFullscreen = () => {
	const [supported] = useState(() => isFullscreenSupported());
	const [needsHomeScreen] = useState(() => isIPhoneSafari() && !isStandalone());
	const [active, setActive] = useState(() => !!getFullscreenElement() || isStandalone());

	useEffect(() => {
		if (!supported) return;
		const handler = () => setActive(!!getFullscreenElement() || isStandalone());
		document.addEventListener("fullscreenchange", handler);
		document.addEventListener("webkitfullscreenchange", handler);
		return () => {
			document.removeEventListener("fullscreenchange", handler);
			document.removeEventListener("webkitfullscreenchange", handler);
		};
	}, [supported]);

	const enter = useCallback(async () => {
		const root = document.documentElement as HTMLElement & {
			webkitRequestFullscreen?: () => Promise<void>;
		};
		try {
			if (root.requestFullscreen) await root.requestFullscreen();
			else if (root.webkitRequestFullscreen) await root.webkitRequestFullscreen();
		} catch {
			/* user denied or not allowed */
		}
	}, []);

	const exit = useCallback(async () => {
		const doc = document as Document & { webkitExitFullscreen?: () => Promise<void> };
		try {
			if (doc.exitFullscreen) await doc.exitFullscreen();
			else if (doc.webkitExitFullscreen) await doc.webkitExitFullscreen();
		} catch {
			/* noop */
		}
	}, []);

	const toggle = useCallback(() => {
		if (active) exit();
		else enter();
	}, [active, enter, exit]);

	return { supported, active, needsHomeScreen, enter, exit, toggle };
};
