import { useEffect, useState } from "react";

export const useTime = () => {
	const [now, setNow] = useState(() => new Date());

	useEffect(() => {
		const tick = () => setNow(new Date());
		const ms = 60_000 - (Date.now() % 60_000);
		const timeout = setTimeout(() => {
			tick();
			const interval = setInterval(tick, 60_000);
			(timeout as unknown as { _interval?: number })._interval = interval as unknown as number;
		}, ms);
		return () => {
			clearTimeout(timeout);
			const interval = (timeout as unknown as { _interval?: number })._interval;
			if (interval) clearInterval(interval as unknown as number);
		};
	}, []);

	return now;
};

export const formatTime = (d: Date) =>
	d.toLocaleTimeString([], { hour: "numeric", minute: "2-digit", hour12: false });

export const formatLockTime = (d: Date) =>
	d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false });

export const formatLockDate = (d: Date) =>
	d.toLocaleDateString([], { weekday: "long", month: "long", day: "numeric" });
