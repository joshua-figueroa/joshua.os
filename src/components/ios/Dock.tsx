import { DOCK_APPS, getApp, type AppId } from "../../constants/ios";
import AppIcon, { type AppContext } from "./AppIcon";

type Props = {
	onOpen: (id: AppId, context: AppContext) => void;
	iconSize?: number;
	openId?: AppId | null;
	openContext?: AppContext | null;
};

const Dock = ({ onOpen, iconSize = 60, openId, openContext }: Props) => {
	return (
		<div className="glass-dock rounded-[28px] px-4 py-3 flex items-center justify-center gap-3 sm:gap-5">
			{DOCK_APPS.map((id) => (
				<AppIcon
					key={id}
					app={getApp(id)}
					context="dock"
					size={iconSize}
					showLabel={false}
					hidden={openId === id && openContext === "dock"}
					badge={id === "projects" ? 6 : undefined}
					onClick={() => onOpen(id, "dock")}
				/>
			))}
		</div>
	);
};

export default Dock;
