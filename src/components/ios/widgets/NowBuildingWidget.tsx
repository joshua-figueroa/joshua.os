import Widget from "../Widget";
import revdash from "../../../assets/projects/revdash.png";

type Props = {
	onOpen?: () => void;
};

const NowBuildingWidget = ({ onOpen }: Props) => {
	return (
		<Widget size="md" onClick={onOpen}>
			<div className="flex flex-col h-full justify-between">
				<div className="flex items-center gap-2">
					<img src={revdash} alt="RevDash" className="w-9 h-9 rounded-[10px] flex-shrink-0" />
					<span className="text-white/50 text-[10px] font-bold uppercase tracking-wide">Now Building</span>
				</div>

				<div className="leading-tight">
					<div className="text-white font-semibold text-[16px]">RevDash</div>
					<div className="text-white/65 text-[11px]">iOS · OBD-II</div>
				</div>

				<div className="flex items-center gap-1.5">
					<span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
					<span className="text-green-400 text-[10px] font-medium truncate">Live on App Store</span>
				</div>
			</div>
		</Widget>
	);
};

export default NowBuildingWidget;
