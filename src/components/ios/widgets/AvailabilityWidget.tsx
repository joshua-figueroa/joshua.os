import Widget from "../Widget";

type Props = {
	wide?: boolean;
	className?: string;
};

const AvailabilityWidget = ({ wide = false, className = "" }: Props) => {
	if (wide) {
		return (
			<Widget size="wide" className={className}>
				<div className="flex items-center justify-between h-full gap-3">
					<div className="flex flex-col gap-0.5 min-w-0">
						<div className="flex items-center gap-1.5">
							<span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
							<span className="text-green-400 text-[11px] font-bold uppercase tracking-wide">Status</span>
						</div>
						<span className="text-white font-semibold text-[15px] leading-tight">Available</span>
						<span className="text-white/60 text-[11px] leading-tight truncate">Open for new projects</span>
					</div>
					<div className="text-white/40 text-[10px] text-right flex-shrink-0">Manila<br />UTC+8</div>
				</div>
			</Widget>
		);
	}

	return (
		<Widget size="md" className={className}>
			<div className="flex flex-col h-full justify-between">
				<div className="flex items-center gap-1.5">
					<span className="text-green-400 text-[11px] font-bold uppercase tracking-wide">Status</span>
				</div>
				<div className="flex flex-col gap-1">
					<div className="flex items-center gap-2">
						<span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
						<span className="text-white font-semibold text-[15px]">Available</span>
					</div>
					<span className="text-white/60 text-[12px] leading-snug">Open for new projects</span>
				</div>
				<div className="text-white/40 text-[11px]">Manila · UTC+8</div>
			</div>
		</Widget>
	);
};

export default AvailabilityWidget;
