import type { ReactNode } from "react";
import {
	HiUser,
	HiFolder,
	HiSquare3Stack3D,
	HiChatBubbleLeftEllipsis,
} from "react-icons/hi2";
import type { AppId } from "../../constants/ios";

type IconType = (props: { size?: string | number; color?: string; style?: React.CSSProperties }) => ReactNode;

const Glyph = ({ Icon }: { Icon: IconType }) => (
	<div className="flex items-center justify-center" style={{ width: "55%", height: "55%" }}>
		<Icon style={{ width: "100%", height: "100%", color: "white", filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.25))" }} />
	</div>
);

const SafariIcon = () => (
	<div className="relative flex items-center justify-center" style={{ width: "92%", height: "92%" }}>
		<svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%" }}>
			<defs>
				<radialGradient id="safari-bg" cx="50%" cy="50%" r="50%">
					<stop offset="0%" stopColor="#DDEDFF" />
					<stop offset="100%" stopColor="#1B95FF" />
				</radialGradient>
			</defs>
			<circle cx="50" cy="50" r="48" fill="url(#safari-bg)" />
			<circle cx="50" cy="50" r="48" fill="none" stroke="#1B6CE7" strokeWidth="1" opacity="0.4" />
			{/* Tick marks */}
			{Array.from({ length: 60 }).map((_, i) => {
				const angle = (i * 6 * Math.PI) / 180;
				const isMajor = i % 5 === 0;
				const inner = isMajor ? 38 : 41;
				const outer = 44;
				const x1 = 50 + Math.cos(angle) * inner;
				const y1 = 50 + Math.sin(angle) * inner;
				const x2 = 50 + Math.cos(angle) * outer;
				const y2 = 50 + Math.sin(angle) * outer;
				return (
					<line
						key={i}
						x1={x1}
						y1={y1}
						x2={x2}
						y2={y2}
						stroke="white"
						strokeWidth={isMajor ? 1.6 : 1}
						opacity="0.85"
					/>
				);
			})}
			{/* Compass needle */}
			<polygon points="50,18 54,50 50,82 46,50" fill="white" />
			<polygon points="50,18 54,50 50,50" fill="#FF3B30" />
			<polygon points="50,82 46,50 50,50" fill="#FF3B30" />
			<circle cx="50" cy="50" r="3" fill="white" stroke="#1B6CE7" strokeWidth="1" />
		</svg>
	</div>
);

export const getAppIconNode = (id: AppId): ReactNode | null => {
	switch (id) {
		case "about":
			return <Glyph Icon={HiUser as IconType} />;
		case "projects":
			return <Glyph Icon={HiFolder as IconType} />;
		case "tech":
			return <Glyph Icon={HiSquare3Stack3D as IconType} />;
		case "contact":
			return <Glyph Icon={HiChatBubbleLeftEllipsis as IconType} />;
		case "safari":
			return <SafariIcon />;
		default:
			return null;
	}
};
