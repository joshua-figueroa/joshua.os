import { motion, type PanInfo } from "framer-motion";
import type { ReactNode } from "react";
import type { AppDef } from "../../constants/ios";
import type { AppContext } from "./AppIcon";

type Props = {
	app: AppDef;
	context: AppContext;
	onClose: () => void;
	children: ReactNode;
};

const AppFrame = ({ app, context, onClose, children }: Props) => {
	const handleDragEnd = (_: unknown, info: PanInfo) => {
		if (info.offset.y > 100 || info.velocity.y > 400) onClose();
	};

	return (
		<motion.div
			layoutId={`app-icon-${context}-${app.id}`}
			className="absolute inset-0 z-30 overflow-hidden bg-primary"
			style={{ borderRadius: 32 }}
			transition={{ type: "spring", stiffness: 280, damping: 32 }}
		>
			<motion.div
				drag="y"
				dragConstraints={{ top: 0, bottom: 0 }}
				dragElastic={{ top: 0, bottom: 0.4 }}
				onDragEnd={handleDragEnd}
				className="w-full h-full flex flex-col"
			>
				{/* Drag-handle bar */}
				<div className="flex-shrink-0 flex items-center justify-between px-4 pt-3 pb-1.5 select-none">
					<div className="w-10" />
					<div className="w-9 h-1.5 rounded-full bg-white/25" />
					<button
						onClick={onClose}
						className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/15 flex items-center justify-center transition-colors"
						aria-label="Close"
					>
						<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
							<path d="M3 3L11 11M11 3L3 11" stroke="white" strokeWidth="1.7" strokeLinecap="round" />
						</svg>
					</button>
				</div>

				<div className="flex-1 overflow-y-auto no-scrollbar">{children}</div>
			</motion.div>
		</motion.div>
	);
};

export default AppFrame;
