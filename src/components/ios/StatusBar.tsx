import { IoCellular, IoWifi, IoBatteryFull } from "react-icons/io5";
import { useTime, formatLockTime } from "../../hooks/useTime";
import { useDeviceType } from "../../hooks/useDeviceType";
import { useFullscreen } from "../../hooks/useFullscreen";

type Props = {
	dark?: boolean;
};

const StatusBar = ({ dark = false }: Props) => {
	const now = useTime();
	const device = useDeviceType();
	const fullscreen = useFullscreen();
	const isPhone = device === "phone";
	const showDynamicIsland = isPhone && !fullscreen.active;
	const color = dark ? "text-black" : "text-white";

	return (
		<div className={`relative w-full h-11 flex items-center justify-between px-7 select-none ${color}`}>
			<span className="font-semibold text-[15px] tracking-tight w-16">{formatLockTime(now)}</span>

			{showDynamicIsland && <div className="absolute left-1/2 -translate-x-1/2 top-2 w-28 h-7 rounded-full bg-black" />}

			<div className="flex items-center gap-1.5 w-16 justify-end">
				<IoCellular size={14} />
				<IoWifi size={14} />
				<IoBatteryFull size={20} />
			</div>
		</div>
	);
};

export default StatusBar;
