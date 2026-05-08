import { useState } from "react";
import { useDeviceType } from "../../hooks/useDeviceType";
import { useFullscreen } from "../../hooks/useFullscreen";
import AddToHomeSheet from "./AddToHomeSheet";
import { GRID_APPS, getApp, type AppId } from "../../constants/ios";
import AppIcon, { type AppContext } from "./AppIcon";
import Dock from "./Dock";
import StatusBar from "./StatusBar";
import Wallpaper from "./Wallpaper";
import ClockWidget from "./widgets/ClockWidget";
import NowBuildingWidget from "./widgets/NowBuildingWidget";
import AvailabilityWidget from "./widgets/AvailabilityWidget";
import ControlsWidget from "./widgets/ControlsWidget";

type Props = {
	onOpen: (id: AppId, context: AppContext) => void;
	onLock: () => void;
	openId?: AppId | null;
	openContext?: AppContext | null;
};

const HomeScreen = ({ onOpen, onLock, openId, openContext }: Props) => {
	const device = useDeviceType();
	const isPad = device === "pad";
	const fullscreen = useFullscreen();
	const [showAddToHome, setShowAddToHome] = useState(false);

	const handleToggleFullscreen = () => {
		if (fullscreen.needsHomeScreen) {
			setShowAddToHome(true);
			return;
		}
		fullscreen.toggle();
	};

	const isHidden = (id: AppId, ctx: AppContext) =>
		openId === id && openContext === ctx;

	return (
		<div className="relative w-full h-full overflow-hidden">
			<Wallpaper />

			<div className="relative z-10 flex flex-col h-full">
				<StatusBar />

				{isPad ? (
					<div className="flex-1 flex flex-col px-12 pt-6 pb-6 max-w-[1100px] mx-auto w-full">
						{/* Widgets row — 4 square widgets */}
						<div className="grid grid-cols-4 gap-5 mb-10">
							<ClockWidget />
							<AvailabilityWidget />
							<NowBuildingWidget onOpen={() => onOpen("revdash", "grid")} />
							<ControlsWidget
								fullscreenActive={fullscreen.active}
								onLock={onLock}
								onToggleFullscreen={handleToggleFullscreen}
							/>
						</div>

						{/* App grid */}
						<div className="grid grid-cols-6 gap-x-8 gap-y-7">
							{GRID_APPS.map((id) => (
								<AppIcon
									key={id}
									app={getApp(id)}
									context="grid"
									size={80}
									hidden={isHidden(id, "grid")}
									onClick={() => onOpen(id, "grid")}
								/>
							))}
						</div>

						<div className="flex-1" />

						<div className="flex justify-center pb-2">
							<Dock onOpen={onOpen} iconSize={64} openId={openId} openContext={openContext} />
						</div>
					</div>
				) : (
					<div className="flex-1 flex flex-col px-6 pt-2 pb-3">
						{/* Widgets — 2x2 grid */}
						<div className="grid grid-cols-2 gap-3 mb-6">
							<ClockWidget />
							<AvailabilityWidget />
							<NowBuildingWidget onOpen={() => onOpen("revdash", "grid")} />
							<ControlsWidget
								fullscreenActive={fullscreen.active}
								onLock={onLock}
								onToggleFullscreen={handleToggleFullscreen}
							/>
						</div>

						{/* App grid */}
						<div className="grid grid-cols-4 gap-x-3 gap-y-5">
							{GRID_APPS.map((id) => (
								<AppIcon
									key={id}
									app={getApp(id)}
									context="grid"
									size={60}
									hidden={isHidden(id, "grid")}
									onClick={() => onOpen(id, "grid")}
								/>
							))}
						</div>

						<div className="flex-1" />

						<div className="flex justify-center pb-2">
							<Dock onOpen={onOpen} iconSize={56} openId={openId} openContext={openContext} />
						</div>
					</div>
				)}
			</div>

			<AddToHomeSheet open={showAddToHome} onClose={() => setShowAddToHome(false)} />
		</div>
	);
};

export default HomeScreen;
