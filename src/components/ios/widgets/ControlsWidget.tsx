import cn from "classnames";
import { HiHomeModern, HiLockClosed, HiArrowsPointingOut, HiArrowsPointingIn } from "react-icons/hi2";
import Widget from "../Widget";

type Props = {
	fullscreenActive: boolean;
	onLock: () => void;
	onToggleFullscreen: () => void;
	wide?: boolean;
	className?: string;
};

type TileProps = {
	icon: React.ReactNode;
	subtitle: string;
	title: string;
	active?: boolean;
	wide?: boolean;
	onClick: () => void;
};

const Tile = ({ icon, subtitle, title, active = false, wide = false, onClick }: TileProps) => (
	<button
		onClick={onClick}
		className={cn(
			"relative rounded-2xl p-2.5 flex transition-colors",
			wide
				? "flex-row items-center gap-2 h-full"
				: "flex-col justify-between items-start text-left aspect-square",
			active
				? "bg-white border border-white"
				: "bg-white/[0.04] border border-white/15 hover:bg-white/8",
		)}
	>
		<div className={active ? "text-yellow-500" : "text-white"}>{icon}</div>
		<div className="leading-tight">
			<div className={cn("text-[10px] font-medium", active ? "text-black/55" : "text-white/55")}>
				{subtitle}
			</div>
			<div className={cn("text-[12px] font-bold", active ? "text-black" : "text-white")}>
				{title}
			</div>
		</div>
	</button>
);

const ControlsWidget = ({
	fullscreenActive,
	onLock,
	onToggleFullscreen,
	wide = false,
	className = "",
}: Props) => {
	if (wide) {
		return (
			<Widget size="wide" className={className}>
				<div className="grid grid-cols-2 gap-2 h-full">
					<Tile
						wide
						icon={<HiLockClosed size={18} />}
						subtitle="Screen"
						title="Lock"
						onClick={onLock}
					/>
					<Tile
						wide
						icon={
							fullscreenActive ? <HiArrowsPointingIn size={18} /> : <HiArrowsPointingOut size={18} />
						}
						subtitle="Display"
						title={fullscreenActive ? "Exit" : "Full"}
						active={fullscreenActive}
						onClick={onToggleFullscreen}
					/>
				</div>
			</Widget>
		);
	}

	return (
		<Widget size="md" className={className}>
			<div className="flex flex-col h-full">
				<div className="flex items-center gap-1.5 mb-2.5">
					<HiHomeModern className="text-orange-400" size={14} />
					<span className="text-orange-400 text-[11px] font-bold uppercase tracking-wide">Home</span>
				</div>

				<div className="grid grid-cols-2 gap-2 my-auto">
					<Tile
						icon={<HiLockClosed size={20} />}
						subtitle="Screen"
						title="Lock"
						onClick={onLock}
					/>
					<Tile
						icon={
							fullscreenActive ? <HiArrowsPointingIn size={20} /> : <HiArrowsPointingOut size={20} />
						}
						subtitle="Display"
						title={fullscreenActive ? "Exit" : "Full"}
						active={fullscreenActive}
						onClick={onToggleFullscreen}
					/>
				</div>
			</div>
		</Widget>
	);
};

export default ControlsWidget;
