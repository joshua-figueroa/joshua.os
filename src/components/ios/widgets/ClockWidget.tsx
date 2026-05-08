import Widget from "../Widget";
import { useTime, formatLockTime } from "../../../hooks/useTime";

const ClockWidget = () => {
	const now = useTime();
	const hh = formatLockTime(now).split(":")[0];
	const mm = formatLockTime(now).split(":")[1];

	return (
		<Widget size="md">
			<div className="flex flex-col h-full justify-between">
				<div className="flex items-center gap-1.5">
					<span className="text-orange-400 text-[11px] font-bold uppercase tracking-wide">⏱ Clock</span>
				</div>
				<div className="flex items-baseline gap-0.5 leading-none">
					<span className="text-white font-light text-[44px] tabular-nums">{hh}</span>
					<span className="text-white/50 font-light text-[44px] tabular-nums">:</span>
					<span className="text-white font-light text-[44px] tabular-nums">{mm}</span>
				</div>
				<div className="text-white/60 text-[12px] font-medium">Manila, PH</div>
			</div>
		</Widget>
	);
};

export default ClockWidget;
