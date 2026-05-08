import { motion } from "framer-motion";
import type { ReactNode } from "react";
import type { AppDef } from "../../constants/ios";
import { getAppIconNode } from "./AppIcons";

export type AppContext = "grid" | "dock";

type Props = {
	app: AppDef;
	context: AppContext;
	size?: number;
	showLabel?: boolean;
	hidden?: boolean;
	badge?: number;
	iconOverride?: ReactNode;
	labelOverride?: string;
	onClick?: () => void;
};

const AppIcon = ({
	app,
	context,
	size = 64,
	showLabel = true,
	hidden = false,
	badge,
	iconOverride,
	labelOverride,
	onClick,
}: Props) => {
	const builtIn = !iconOverride ? getAppIconNode(app.id) : null;

	return (
		<button
			onClick={onClick}
			className="flex flex-col items-center gap-1.5 group select-none focus:outline-none"
			aria-label={app.name}
			style={{ visibility: hidden ? "hidden" : "visible" }}
		>
			<div className="relative" style={{ width: size, height: size }}>
				<motion.div
					layoutId={`app-icon-${context}-${app.id}`}
					whileTap={{ scale: 0.92 }}
					transition={{ type: "spring", stiffness: 400, damping: 25 }}
					className="squircle icon-shadow flex items-center justify-center text-2xl overflow-hidden w-full h-full"
					style={{
						background: app.gradient,
					}}
				>
					{iconOverride ? (
						iconOverride
					) : app.image ? (
						<img src={app.image} alt={app.name} className="w-full h-full object-cover" />
					) : app.logo ? (
						<img src={app.logo} alt={app.name} className="object-contain" style={{ width: "55%", height: "55%" }} />
					) : builtIn ? (
						builtIn
					) : (
						<span className="text-[28px] leading-none drop-shadow-sm">{app.emoji}</span>
					)}
				</motion.div>

				{badge !== undefined && badge > 0 && (
					<span
						className="absolute -top-1 -right-1 min-w-[22px] h-[22px] rounded-full bg-red-500 text-white text-[12px] font-bold flex items-center justify-center px-1.5 pointer-events-none shadow-lg"
					>
						{badge > 99 ? "99+" : badge}
					</span>
				)}
			</div>

			{showLabel && (
				<span className="text-[11px] text-white font-medium tracking-tight drop-shadow-md max-w-[80px] truncate">
					{labelOverride ?? app.name}
				</span>
			)}
		</button>
	);
};

export default AppIcon;
