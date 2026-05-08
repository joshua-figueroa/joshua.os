import type { ReactNode } from "react";

type Size = "sm" | "md" | "lg" | "wide";

type Props = {
	size?: Size;
	className?: string;
	onClick?: () => void;
	children: ReactNode;
};

const Widget = ({ size = "md", className = "", onClick, children }: Props) => {
	const interactive = onClick ? "cursor-pointer hover:scale-[1.02] transition-transform" : "";

	if (size === "wide") {
		return (
			<div
				onClick={onClick}
				className={`glass-strong rounded-ios-lg p-4 w-full aspect-[2/1] overflow-hidden ${interactive} ${className}`}
			>
				{children}
			</div>
		);
	}

	// Square widgets: padding-bottom 100% trick guarantees square regardless of content
	return (
		<div className={`relative w-full ${interactive} ${className}`} onClick={onClick}>
			<div style={{ paddingBottom: "100%" }} aria-hidden />
			<div className="absolute inset-0 glass-strong rounded-ios-lg p-4 overflow-hidden">
				{children}
			</div>
		</div>
	);
};

export default Widget;
