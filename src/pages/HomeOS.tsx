import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import HomeScreen from "../components/ios/HomeScreen";
import LockScreen from "../components/ios/LockScreen";
import AppFrame from "../components/ios/AppFrame";
import type { AppContext } from "../components/ios/AppIcon";
import { APPS, getApp, type AppId } from "../constants/ios";
import AboutApp from "../components/ios/apps/AboutApp";
import ProjectsApp from "../components/ios/apps/ProjectsApp";
import TechApp from "../components/ios/apps/TechApp";
import ContactApp from "../components/ios/apps/ContactApp";

const UNLOCK_KEY = "joshua-portfolio-unlocked";
const OPEN_KEY = "joshua-portfolio-open-app";

type OpenState = { id: AppId; context: AppContext } | null;

const readStoredOpen = (): OpenState => {
	if (typeof window === "undefined") return null;
	try {
		const raw = window.localStorage.getItem(OPEN_KEY);
		if (!raw) return null;
		const parsed = JSON.parse(raw) as { id?: string; context?: string };
		if (!parsed.id || !parsed.context) return null;
		if (parsed.context !== "grid" && parsed.context !== "dock") return null;
		const app = APPS.find((a) => a.id === parsed.id);
		if (!app || app.kind !== "modal") return null;
		return { id: app.id, context: parsed.context as AppContext };
	} catch {
		return null;
	}
};

const renderApp = (id: AppId) => {
	switch (id) {
		case "about":
			return <AboutApp />;
		case "projects":
			return <ProjectsApp />;
		case "tech":
			return <TechApp />;
		case "contact":
			return <ContactApp />;
		default:
			return null;
	}
};

const HomeOS = () => {
	const navigate = useNavigate();
	const [isLocked, setIsLocked] = useState<boolean>(() => {
		if (typeof window === "undefined") return true;
		return sessionStorage.getItem(UNLOCK_KEY) !== "1";
	});
	const [open, setOpen] = useState<OpenState>(readStoredOpen);

	useEffect(() => {
		try {
			if (open === null) window.localStorage.removeItem(OPEN_KEY);
			else window.localStorage.setItem(OPEN_KEY, JSON.stringify(open));
		} catch {
			/* private mode / storage unavailable */
		}
	}, [open]);

	const handleUnlock = () => {
		sessionStorage.setItem(UNLOCK_KEY, "1");
		setIsLocked(false);
	};

	const handleLock = () => {
		sessionStorage.removeItem(UNLOCK_KEY);
		setIsLocked(true);
		setOpen(null);
	};

	const handleOpen = (id: AppId, context: AppContext) => {
		const app = getApp(id);
		if (app.kind === "external" && app.url) {
			window.open(app.url, "_blank", "noopener,noreferrer");
			return;
		}
		if (app.kind === "route" && app.url) {
			navigate(app.url);
			return;
		}
		setOpen({ id, context });
	};

	const handleClose = () => setOpen(null);

	return (
		<div className="fixed inset-0 bg-black overflow-hidden">
			<LayoutGroup>
				<HomeScreen
					onOpen={handleOpen}
					onLock={handleLock}
					openId={open?.id ?? null}
					openContext={open?.context ?? null}
				/>

				<AnimatePresence>
					{open && (
						<AppFrame
							key={`${open.context}-${open.id}`}
							app={getApp(open.id)}
							context={open.context}
							onClose={handleClose}
						>
							{renderApp(open.id)}
						</AppFrame>
					)}
				</AnimatePresence>

				<AnimatePresence>{isLocked && <LockScreen onUnlock={handleUnlock} />}</AnimatePresence>
			</LayoutGroup>
		</div>
	);
};

export default HomeOS;
