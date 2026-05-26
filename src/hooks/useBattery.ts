import { useEffect, useState } from "react";

interface BatteryManager extends EventTarget {
	level: number;
	charging: boolean;
	chargingTime: number;
	dischargingTime: number;
}

type BatteryState = {
	level: number;
	charging: boolean;
};

const FALLBACK: BatteryState = { level: 1, charging: false };

export function useBattery(): BatteryState {
	const [state, setState] = useState<BatteryState>(FALLBACK);

	useEffect(() => {
		if (!("getBattery" in navigator)) return;

		let battery: BatteryManager | null = null;

		const update = () => {
			if (!battery) return;
			setState({ level: battery.level, charging: battery.charging });
		};

		(navigator as Navigator & { getBattery(): Promise<BatteryManager> }).getBattery()
			.then((b) => {
				battery = b;
				update();
				b.addEventListener("levelchange", update);
				b.addEventListener("chargingchange", update);
			})
			.catch(() => {});

		return () => {
			if (battery) {
				battery.removeEventListener("levelchange", update);
				battery.removeEventListener("chargingchange", update);
			}
		};
	}, []);

	return state;
}
