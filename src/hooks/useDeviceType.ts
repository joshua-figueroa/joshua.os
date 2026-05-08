import { useEffect, useState } from "react";

export type DeviceType = "pad" | "phone";

const PAD_BREAKPOINT = 768;

export const useDeviceType = (): DeviceType => {
	const [type, setType] = useState<DeviceType>(() =>
		typeof window !== "undefined" && window.innerWidth >= PAD_BREAKPOINT ? "pad" : "phone"
	);

	useEffect(() => {
		const update = () => setType(window.innerWidth >= PAD_BREAKPOINT ? "pad" : "phone");
		window.addEventListener("resize", update);
		return () => window.removeEventListener("resize", update);
	}, []);

	return type;
};
