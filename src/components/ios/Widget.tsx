import type { ReactNode } from "react";
import cn from "classnames";

type Size = "sm" | "md" | "lg" | "wide";

type Props = {
	size?: Size;
	className?: string;
	onClick?: () => void;
	children: ReactNode;
};

const Widget = ({ size = "md", className = "", onClick, children }: Props) => {
	const interactive = onClick && "cursor-pointer hover:scale-[1.02] transition-transform";

	if (size === "wide") {
		return (
			<div
				onClick={onClick}
				className={cn(
					"glass-strong rounded-ios-lg p-3 w-full aspect-[2/1] overflow-hidden flex flex-col",
					interactive,
					className,
				)}
			>
				{children}
			</div>
		);
	}

	return (
		<div className={cn("relative w-full", interactive, className)} onClick={onClick}>
			<div style={{ paddingBottom: "100%" }} aria-hidden />
			<div className="absolute inset-0 glass-strong rounded-ios-lg p-4 overflow-hidden">{children}</div>
		</div>
	);
};

export default Widget;
