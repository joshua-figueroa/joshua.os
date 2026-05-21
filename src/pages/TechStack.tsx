import { useState, type ComponentType } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import cn from "classnames";
import {
	HiCodeBracket,
	HiDevicePhoneMobile,
	HiServerStack,
	HiCloud,
	HiCpuChip,
	HiMagnifyingGlass,
	HiChevronLeft,
	HiChevronRight,
	HiSquares2X2,
	HiBars3,
	HiEllipsisHorizontal,
	HiMicrophone,
} from "react-icons/hi2";
import { technologies } from "../constants/techs";
import { useDeviceType } from "../hooks/useDeviceType";
import { usePageMeta } from "../hooks/usePageMeta";
import { useStoredSection } from "../hooks/useStoredSection";

type IconType = ComponentType<{ size?: number; className?: string }>;

type Category = {
	id: string;
	label: string;
	icon: IconType;
	items: string[];
};

const categories: Category[] = [
	{
		id: "frontend",
		label: "Frontend",
		icon: HiCodeBracket,
		items: ["JavaScript", "TypeScript", "React JS", "NextJS", "Tailwind CSS"],
	},
	{
		id: "mobile",
		label: "Mobile",
		icon: HiDevicePhoneMobile,
		items: ["React Native", "SwiftUI", "Jetpack Compose", "Flutter"],
	},
	{
		id: "backend",
		label: "Backend",
		icon: HiServerStack,
		items: ["NodeJS", "Golang", "Springboot", "MySQL", "Firebase"],
	},
	{
		id: "infra",
		label: "Infra",
		icon: HiCloud,
		items: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"],
	},
	{
		id: "hardware",
		label: "Hardware",
		icon: HiCpuChip,
		items: ["Arduino", "Raspberry Pi"],
	},
];

const STORAGE_KEY = "tech-stack-section";

const useStoredSection = () => {
	const [id, setId] = useState<string>(() => {
		if (typeof window === "undefined") return categories[0].id;
		try {
			const stored = window.localStorage.getItem(STORAGE_KEY);
			if (stored && categories.some((c) => c.id === stored)) return stored;
		} catch {
			/* private mode / storage unavailable */
		}
		return categories[0].id;
	});

	const update = (next: string) => {
		setId(next);
		try {
			window.localStorage.setItem(STORAGE_KEY, next);
		} catch {
			/* ignore */
		}
	};

	return [id, update] as const;
};

const TrafficLight = ({ color, onClick, ariaLabel }: { color: string; onClick?: () => void; ariaLabel?: string }) => (
	<button
		onClick={onClick}
		aria-label={ariaLabel}
		className="w-3 h-3 rounded-full transition-opacity hover:opacity-80 focus-visible:outline-none"
		style={{ backgroundColor: color }}
	/>
);

const DesktopFinder = ({ onClose }: { onClose: () => void }) => {
	const [selectedId, setSelectedId] = useStoredSection();
	const current = categories.find((c) => c.id === selectedId) ?? categories[0];
	const items = technologies.filter((t) => current.items.includes(t.name));

	return (
		<div className="fixed inset-0 bg-black flex items-center justify-center p-6 lg:p-10">
			<motion.div
				initial={{ opacity: 0, scale: 0.96, y: 12 }}
				animate={{ opacity: 1, scale: 1, y: 0 }}
				transition={{ type: "spring", stiffness: 280, damping: 30 }}
				className="w-full max-w-5xl h-[82vh] max-h-[760px] rounded-2xl overflow-hidden flex flex-col"
				style={{
					backgroundColor: "rgba(34,34,36,0.95)",
					backdropFilter: "blur(30px)",
					WebkitBackdropFilter: "blur(30px)",
					boxShadow: "0 30px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.05)",
				}}
			>
				{/* Title bar */}
				<div className="flex items-center px-4 h-12 border-b border-white/10 flex-shrink-0 select-none">
					<div className="flex gap-2 w-[88px]">
						<TrafficLight color="#FF5F57" onClick={onClose} ariaLabel="Close" />
						<TrafficLight color="#FEBC2E" />
						<TrafficLight color="#28C840" />
					</div>

					<div className="flex-1 flex items-center justify-between gap-3">
						<div className="flex items-center gap-1 text-white/30">
							<HiChevronLeft size={20} />
							<HiChevronRight size={20} />
						</div>

						<span className="text-white text-[14px] font-semibold tracking-tight">{current.label}</span>

						<div className="flex items-center gap-2 text-white/30">
							<button className="px-2 py-1 rounded-md hover:bg-white/5" aria-label="Icon view">
								<HiSquares2X2 size={16} />
							</button>
							<button className="px-2 py-1 rounded-md hover:bg-white/5" aria-label="List view">
								<HiBars3 size={16} />
							</button>
							<button className="px-2 py-1 rounded-md hover:bg-white/5" aria-label="Search">
								<HiMagnifyingGlass size={16} />
							</button>
						</div>
					</div>
				</div>

				{/* Body */}
				<div className="flex-1 flex overflow-hidden">
					{/* Sidebar */}
					<aside
						className="w-56 flex-shrink-0 overflow-y-auto no-scrollbar p-3 border-r border-white/5"
						style={{ backgroundColor: "rgba(0,0,0,0.25)" }}
					>
						<div className="text-[11px] text-white/40 uppercase tracking-wider px-2 mb-1.5 font-semibold">
							Stack
						</div>
						<ul className="space-y-0.5">
							{categories.map((c) => {
								const active = selectedId === c.id;
								const Icon = c.icon;
								return (
									<li key={c.id}>
										<button
											onClick={() => setSelectedId(c.id)}
											className={cn(
												"w-full flex items-center gap-2.5 px-2 py-1.5 rounded-md text-[13px] transition-colors text-left",
												active ? "bg-blue-500/25 text-white" : "text-white/75 hover:bg-white/5"
											)}
										>
											<Icon size={16} className={active ? "text-blue-400" : "text-white/45"} />
											<span className="font-medium">{c.label}</span>
										</button>
									</li>
								);
							})}
						</ul>

						<div className="text-[11px] text-white/40 uppercase tracking-wider px-2 mt-5 mb-1.5 font-semibold">
							About
						</div>
						<ul className="space-y-0.5">
							<li>
								<button
									onClick={onClose}
									className="w-full flex items-center gap-2.5 px-2 py-1.5 rounded-md text-[13px] text-white/75 hover:bg-white/5 transition-colors text-left"
								>
									<span className="w-4 inline-flex justify-center text-white/45">↩</span>
									<span className="font-medium">Back to Home</span>
								</button>
							</li>
						</ul>
					</aside>

					{/* Main grid */}
					<main className="flex-1 overflow-y-auto no-scrollbar p-8">
						<div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 gap-x-6 gap-y-8">
							{items.map((t) => (
								<motion.div
									key={t.name}
									initial={{ opacity: 0, y: 8 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.25 }}
									className="flex flex-col items-center gap-2 select-none"
								>
									<div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center p-3">
										<img
											src={t.icon}
											alt={t.name}
											className="w-full h-full object-contain"
											draggable={false}
										/>
									</div>
									<span className="text-white text-[13px] text-center leading-tight">{t.name}</span>
								</motion.div>
							))}
						</div>
					</main>
				</div>
			</motion.div>
		</div>
	);
};

const techCategoryMap: Record<string, string> = (() => {
	const map: Record<string, string> = {};
	for (const cat of categories) {
		for (const item of cat.items) map[item] = cat.label;
	}
	return map;
})();

const MobileFiles = ({ onClose }: { onClose: () => void }) => {
	const [activeId, setActiveId] = useStoredSection();
	const active = categories.find((c) => c.id === activeId) ?? categories[0];
	const items = technologies.filter((t) => active.items.includes(t.name));

	return (
		<div className="fixed inset-0 bg-black overflow-hidden">
			<motion.div
				className="absolute inset-0 z-30 overflow-hidden bg-primary"
				initial={{ x: "100%" }}
				animate={{ x: 0 }}
				transition={{ type: "spring", stiffness: 320, damping: 34 }}
			>
				<div className="w-full h-full flex flex-col relative">
					{/* Top status spacer */}
					<div className="flex-shrink-0 h-2" />

					{/* Header — back + centered title + more button */}
					<div className="flex-shrink-0 flex items-center justify-between px-5 py-3">
						<button
							onClick={onClose}
							className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/15 transition-colors"
							aria-label="Back to home"
						>
							<HiChevronLeft className="text-white" size={18} />
						</button>
						<h1 className="text-white font-bold text-[17px] tracking-tight">{active.label}</h1>
						<button
							className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/15 transition-colors"
							aria-label="More"
						>
							<HiEllipsisHorizontal className="text-white" size={18} />
						</button>
					</div>

					{/* Search bar */}
					<div className="flex-shrink-0 px-5 mb-8">
						<div className="flex items-center gap-2 px-3 h-9 bg-white/[0.08] rounded-xl">
							<HiMagnifyingGlass className="text-white/45 flex-shrink-0" size={16} />
							<span className="text-white/45 text-[15px] flex-1">Search</span>
							<HiMicrophone className="text-white/45 flex-shrink-0" size={16} />
						</div>
					</div>

					{/* Grid */}
					<div className="flex-1 overflow-y-auto no-scrollbar px-5 pb-32">
						<div className="grid grid-cols-3 gap-y-6 gap-x-3">
							{items.map((t, i) => (
								<motion.div
									key={t.name}
									initial={{ opacity: 0, y: 8 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.25, delay: i * 0.015 }}
									className="flex flex-col items-center text-center select-none"
								>
									<div className="w-[72px] h-[72px] rounded-2xl bg-white/5 flex items-center justify-center p-3 mb-2">
										<img
											src={t.icon}
											alt={t.name}
											className="w-full h-full object-contain"
											draggable={false}
										/>
									</div>
									<span className="text-white text-[13px] font-semibold leading-tight px-1">
										{t.name}
									</span>
									<span className="text-white/40 text-[11px] mt-0.5">
										{techCategoryMap[t.name] ?? ""}
									</span>
								</motion.div>
							))}
						</div>
					</div>

					{/* Floating tab bar pill — category sections */}
					<div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 w-[85%] max-w-md">
						<div
							className="grid grid-cols-5 gap-0.5 px-1.5 py-1.5 rounded-full"
							style={{
								backgroundColor: "rgba(28,28,30,0.92)",
								backdropFilter: "blur(20px)",
								WebkitBackdropFilter: "blur(20px)",
								boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
							}}
						>
							{categories.map((c) => {
								const Icon = c.icon;
								const isActive = activeId === c.id;
								return (
									<button
										key={c.id}
										onClick={() => setActiveId(c.id)}
										className={cn(
											"flex flex-col items-center justify-center gap-0.5 w-full py-1.5 rounded-full transition-colors",
											isActive ? "bg-white/[0.08]" : "hover:bg-white/[0.04]"
										)}
									>
										<Icon size={16} className={isActive ? "text-blue-400" : "text-white/55"} />
										<span
											className={cn(
												"text-[9px] font-medium",
												isActive ? "text-blue-400" : "text-white/55"
											)}
										>
											{c.label}
										</span>
									</button>
								);
							})}
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

const TechStack = () => {
	const navigate = useNavigate();
	const device = useDeviceType();

	usePageMeta({
		title: "Tech Stack — Joshua Figueroa",
		description: "Languages, frameworks, and tools I reach for when shipping web, mobile, and backend.",
		url: "https://joshuafigueroa.dev/tech-stack",
	});

	const handleClose = () => navigate("/");

	return device === "pad" ? <DesktopFinder onClose={handleClose} /> : <MobileFiles onClose={handleClose} />;
};

export default TechStack;
