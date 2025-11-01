import type { ReactNode } from "react";
import cn from "clsx";

interface ICustomMenuProps {
	children: ReactNode;
	side?: "left" | "right";
}

export default function CustomMenu({ children, side }: ICustomMenuProps) {
	return (
		<div
			className={cn(
				"w-48 fade-in bg-[#2B2B30] p-1 rounded-md absolute left-0 z-10",
				side === "left" ? "left-0" : side === "right" ? "right-0" : "left-1/2 - translate-x-1/2"
			)}
			style={{ top: "calc(100% + 0.5rem)" }}
		>
			{children}
		</div>
	);
}
