import Widget from "../Widget";

const AvailabilityWidget = () => {
	return (
		<Widget size="md">
			<div className="flex flex-col h-full justify-between">
				<div className="flex items-center gap-1.5">
					<span className="text-green-400 text-[11px] font-bold uppercase tracking-wide">Status</span>
				</div>
				<div className="flex flex-col gap-1">
					<div className="flex items-center gap-2">
						<span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
						<span className="text-white font-semibold text-[15px]">Available</span>
					</div>
					<span className="text-white/60 text-[12px] leading-snug">Open for new projects & roles</span>
				</div>
				<div className="text-white/40 text-[11px]">Manila · UTC+8</div>
			</div>
		</Widget>
	);
};

export default AvailabilityWidget;
