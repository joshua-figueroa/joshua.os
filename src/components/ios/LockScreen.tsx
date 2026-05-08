import { motion, useMotionValue, useTransform, type PanInfo } from "framer-motion";
import { useTime, formatLockTime, formatLockDate } from "../../hooks/useTime";
import StatusBar from "./StatusBar";
import Wallpaper from "./Wallpaper";

type Props = {
	onUnlock: () => void;
};

const LockScreen = ({ onUnlock }: Props) => {
	const now = useTime();
	const y = useMotionValue(0);
	const opacity = useTransform(y, [-200, 0], [0, 1]);
	const scale = useTransform(y, [-300, 0], [1.2, 1]);

	const handleDragEnd = (_: unknown, info: PanInfo) => {
		if (info.offset.y < -100 || info.velocity.y < -400) onUnlock();
	};

	return (
		<motion.div
			style={{ opacity, scale }}
			drag="y"
			dragConstraints={{ top: 0, bottom: 0 }}
			dragElastic={{ top: 0.4, bottom: 0 }}
			onDragEnd={handleDragEnd}
			exit={{ opacity: 0, scale: 1.4, transition: { duration: 0.4 } }}
			className="absolute inset-0 z-50 cursor-grab active:cursor-grabbing"
		>
			<motion.div style={{ y }} className="relative w-full h-full overflow-hidden">
				<Wallpaper />

				<div className="relative z-10 flex flex-col h-full text-white">
					<StatusBar />

					<div className="flex-1 flex flex-col items-center justify-start pt-16 px-6">
						<div className="text-[18px] font-medium opacity-90">{formatLockDate(now)}</div>
						<div className="font-light text-[110px] sm:text-[140px] leading-none tracking-tighter tabular-nums mt-2">
							{formatLockTime(now)}
						</div>
					</div>

					<div className="flex flex-col items-center pb-10 gap-3 select-none">
						<motion.div
							animate={{ y: [-4, 0, -4] }}
							transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
							className="text-white/70"
						>
							<svg width="22" height="22" viewBox="0 0 22 22" fill="none">
								<path d="M11 16V6M11 6L6 11M11 6L16 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</motion.div>
						<div className="text-[14px] text-white/70 font-medium">Swipe up to open</div>
						<div className="w-32 h-1 rounded-full bg-white/40 mt-2" />
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default LockScreen;
