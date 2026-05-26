import cn from "classnames";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import revdash from "../assets/projects/revdash.png";
import appStoreBadge from "../assets/app-store-badge.svg";
import driveView from "../assets/projects/revdash/drive_view.png";
import tripDetail from "../assets/projects/revdash/trip_detail.png";
import diagnostics from "../assets/projects/revdash/diagnostics.png";
import garage from "../assets/projects/revdash/garage.png";
import insights from "../assets/projects/revdash/insights.png";
import widgets from "../assets/projects/revdash/widgets.png";

const COPPER = "#C08A5A";
const NAVY = "#2847A0";
const APP_STORE_URL = "https://apps.apple.com/ph/app/revdash/id6764164749";

const fadeUp = {
	hidden: { opacity: 0, y: 20 },
	visible: (delay: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			delay,
			ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
		},
	}),
};

const features: { icon: string; label: string; body: string }[] = [
	{
		icon: "⚡",
		label: "Live Dashboard",
		body: "Real-time gauges for RPM, speed, coolant temperature, fuel consumption, and more — color-coded to alert you before a small issue becomes serious.",
	},
	{
		icon: "🔌",
		label: "OBD-II Connected",
		body: "Pairs wirelessly with any ELM327 BLE 4.0+ adapter. Works with most vehicles manufactured after 1996 — no proprietary hardware required.",
	},
	{
		icon: "🗺️",
		label: "Automatic Trip Logging",
		body: "Detects when your engine starts and stops, automatically recording every trip with distance, duration, fuel consumed, and route maps.",
	},
	{
		icon: "📊",
		label: "Driving Insights",
		body: "Weekly summaries and pattern analysis. Understand your driving habits, journey profiles, and fuel economy trends over time.",
	},
	{
		icon: "🔍",
		label: "Diagnostics",
		body: "Read and clear OBD-II trouble codes directly in the app. Plain-language descriptions tell you exactly what your car is reporting.",
	},
	{
		icon: "🔒",
		label: "Private by Design",
		body: "No subscriptions. No ads. No data collection. Your driving data stays on your device.",
	},
];

const screenshots = [
	{ src: driveView, alt: "Drive View" },
	{ src: tripDetail, alt: "Trip Detail" },
	{ src: diagnostics, alt: "Diagnostics" },
	{ src: garage, alt: "Garage" },
	{ src: insights, alt: "Insights" },
	{ src: widgets, alt: "Widgets" },
];

const IconChevronLeft = () => (
	<svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
		<path
			d="M9.5 3L5.5 7.5L9.5 12"
			stroke="currentColor"
			strokeWidth="1.6"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const CarouselArrow = ({ direction, onClick }: { direction: "prev" | "next"; onClick: () => void }) => (
	<button
		onClick={onClick}
		aria-label={direction === "prev" ? "Previous screenshot" : "Next screenshot"}
		className="flex-shrink-0 w-9 h-9 rounded-full border border-border-default bg-black-100 flex items-center justify-center text-secondary hover:text-white-100 hover:border-border-default transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
	>
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
			{direction === "prev" ? (
				<path
					d="M10 3L5 8l5 5"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			) : (
				<path
					d="M6 3l5 5-5 5"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			)}
		</svg>
	</button>
);

const RevDashHome = () => {
	usePageMeta({
		title: "RevDash — OBD-II Dashboard for Your Car",
		description:
			"Real-time OBD-II data on your phone. Monitor speed, RPM, temperature, engine diagnostics, and more. iOS now, Android coming soon.",
		url: "https://joshuafigueroa.dev/revdash",
		image: "https://joshuafigueroa.dev/revdash-icon.png",
	});

	const [emblaRef, emblaApi] = useEmblaCarousel({ align: "center", loop: true });
	const [selectedIndex, setSelectedIndex] = useState(0);

	const onSelect = useCallback(() => {
		if (!emblaApi) return;
		setSelectedIndex(emblaApi.selectedScrollSnap());
	}, [emblaApi]);

	useEffect(() => {
		if (!emblaApi) return;
		emblaApi.on("select", onSelect);
		onSelect();
	}, [emblaApi, onSelect]);

	return (
		<div className="min-h-screen bg-primary text-white-100" style={{ overflowX: "clip" }}>
			{/* ─────────────────── Nav ─────────────────── */}
			<header
				className="fixed top-0 inset-x-0 z-50 h-14 flex items-center justify-between px-5 sm:px-8 lg:px-10 border-b border-border-subtle"
				style={{
					backgroundColor: "rgba(0,0,0,0.88)",
					backdropFilter: "blur(20px)",
					WebkitBackdropFilter: "blur(20px)",
				}}
			>
				<Link
					to="/"
					className="flex items-center gap-1 text-secondary hover:text-white-100 transition-colors duration-150 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
				>
					<IconChevronLeft />
					Home
				</Link>

				<a
					href={APP_STORE_URL}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold border border-border-default text-secondary hover:text-white-100 hover:border-white/30 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
				>
					App Store ↗
				</a>
			</header>

			{/* ─────────────────── Hero — Marquee centered ─────────────────── */}
			{/*
			  Both mobile and desktop are centered, but desktop gets significantly
			  larger type (clamp 2.4→5rem), more vertical breathing room, and the
			  icon scales up from w-20 to w-28.
			*/}
			<section className="pt-28 lg:pt-44 pb-14 lg:pb-20 px-5 sm:px-8 flex flex-col items-center text-center">
				<motion.div
					className="relative mb-7"
					initial={{ opacity: 0, scale: 0.85 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
				>
					{/* Subtle navy glow */}
					<div
						className="absolute rounded-full pointer-events-none"
						style={{
							inset: "-35%",
							background: `radial-gradient(circle, ${NAVY}30 0%, transparent 65%)`,
							filter: "blur(28px)",
						}}
						aria-hidden
					/>
					<img
						src={revdash}
						alt="RevDash"
						className="relative w-20 h-20 lg:w-28 lg:h-28 rounded-[22px] select-none"
						style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 4px 16px rgba(0,0,0,0.4)" }}
						draggable={false}
					/>
				</motion.div>

				<motion.p
					className="text-xs font-bold uppercase tracking-widest mb-5"
					style={{ color: COPPER }}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.4, delay: 0.1 }}
				>
					OBD-II Dashboard
				</motion.p>

				<motion.p
					className="font-black text-white-100 tracking-tight leading-none mb-2"
					style={{ fontSize: "clamp(2rem, 5vw, 2.75rem)" }}
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.45, delay: 0.12 }}
				>
					RevDash
				</motion.p>

				<motion.h1
					className="font-black tracking-tight text-white-100 leading-[1.04] max-w-xs sm:max-w-xl lg:max-w-3xl"
					style={{
						fontSize: "clamp(2.4rem, 8vw, 5rem)",
						overflowWrap: "anywhere",
						minWidth: 0,
					}}
					initial={{ opacity: 0, y: 18 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.55, delay: 0.14 }}
				>
					Your car's data. <span style={{ color: COPPER }}>On your screen.</span>
				</motion.h1>

				<motion.p
					className="mt-5 text-secondary text-base lg:text-[1.05rem] leading-relaxed max-w-sm lg:max-w-md"
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.22 }}
				>
					The driving dashboard that puts real-time OBD-II data — speed, RPM, temperature, engine load —
					directly on your phone, every second you drive.
				</motion.p>

				<motion.div
					className="mt-8 flex flex-col items-center gap-2"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
				>
					<a
						href={APP_STORE_URL}
						target="_blank"
						rel="noopener noreferrer"
						className="hover:opacity-80 active:scale-[0.97] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-lg"
					>
						<img src={appStoreBadge} alt="Download on the App Store" className="h-10 lg:h-11 w-auto" />
					</a>
					<p className="text-[11px] text-secondary" style={{ opacity: 0.5 }}>
						Requires ELM327 BLE 4.0+ OBD-II adapter
					</p>
					<span className="inline-flex items-center gap-1.5 text-[11px] text-secondary border border-border-default rounded-full px-3 py-1" style={{ opacity: 0.65 }}>
						🤖 Android — coming soon
					</span>
				</motion.div>
			</section>

			{/* ─────────────────── Screenshot carousel ─────────────────── */}
			<section className="pb-20 flex flex-col items-center gap-5">
				<div className="flex items-center gap-3 w-full px-5 sm:px-8">
					<CarouselArrow direction="prev" onClick={() => emblaApi?.scrollPrev()} />

					<div className="overflow-hidden flex-1 min-w-0" ref={emblaRef}>
						<div className="flex">
							{screenshots.map((s, i) => (
								<div key={s.alt} className="flex-shrink-0 px-2 w-[75%] sm:w-[55%] lg:w-[38%]">
									<motion.img
										src={s.src}
										alt={s.alt}
										className="w-full h-auto rounded-2xl lg:rounded-3xl border border-border-subtle select-none"
										style={{
											boxShadow:
												i === selectedIndex
													? "0 20px 60px rgba(0,0,0,0.5)"
													: "0 8px 24px rgba(0,0,0,0.25)",
										}}
										animate={{
											scale: i === selectedIndex ? 1 : 0.93,
											opacity: i === selectedIndex ? 1 : 0.4,
										}}
										transition={{ type: "spring", stiffness: 300, damping: 30 }}
										draggable={false}
									/>
								</div>
							))}
						</div>
					</div>

					<CarouselArrow direction="next" onClick={() => emblaApi?.scrollNext()} />
				</div>

				{/* Dots */}
				<div className="flex gap-2 items-center">
					{screenshots.map((_, i) => (
						<button
							key={i}
							onClick={() => emblaApi?.scrollTo(i)}
							aria-label={`Go to screenshot ${i + 1}`}
							className={cn(
								"rounded-full transition-all duration-300 focus-visible:outline-none",
								i === selectedIndex
									? "w-5 h-2 bg-white-100"
									: "w-2 h-2 bg-secondary opacity-30 hover:opacity-60"
							)}
						/>
					))}
				</div>

				<p className="text-secondary text-sm" style={{ opacity: 0.6 }}>
					{screenshots[selectedIndex].alt}
				</p>
			</section>

			{/* ─────────────────── Features 2×2 grid ─────────────────── */}
			<section className="px-5 sm:px-8 lg:px-10 pb-20 max-w-screen-xl mx-auto">
				<motion.h2
					className="text-white-100 font-black text-xl lg:text-2xl tracking-tight mb-6 text-center lg:text-left"
					variants={fadeUp}
					custom={0}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
				>
					Built for drivers.
				</motion.h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
					{features.map((f, i) => (
						<motion.div
							key={f.label}
							className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-black-100 p-6 lg:p-8"
							style={{ borderTop: `2px solid ${COPPER}` }}
							variants={fadeUp}
							custom={i * 0.08}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.15 }}
						>
							<span className="text-2xl leading-none">{f.icon}</span>
							<div>
								<h3 className="text-white-100 font-bold text-[17px] leading-snug mb-2">{f.label}</h3>
								<p className="text-secondary text-sm leading-relaxed">{f.body}</p>
							</div>
						</motion.div>
					))}
				</div>
			</section>

			{/* ─────────────────── Download CTA band ─────────────────── */}
			<section className="px-5 sm:px-8 lg:px-10 pb-24 max-w-screen-xl mx-auto">
				<motion.div
					className="rounded-3xl border border-border-subtle bg-black-100 px-8 py-10 lg:px-14 lg:py-14 flex flex-col items-center text-center lg:flex-row lg:items-center lg:justify-between lg:text-left gap-8"
					variants={fadeUp}
					custom={0}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
				>
					<div>
						<h2
							className="font-black tracking-tight text-white-100"
							style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", overflowWrap: "anywhere", minWidth: 0 }}
						>
							Ready to connect?
						</h2>
						<p className="text-secondary mt-2 text-sm">iOS · Android coming soon · Requires ELM327 BLE 4.0+</p>
					</div>
					<a
						href={APP_STORE_URL}
						target="_blank"
						rel="noopener noreferrer"
						className="flex-shrink-0 hover:opacity-80 active:scale-[0.97] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-lg"
					>
						<img src={appStoreBadge} alt="Download on the App Store" className="h-11 w-auto" />
					</a>
				</motion.div>
			</section>

			{/* ─────────────────── Footer ─────────────────── */}
			<footer className="px-5 sm:px-8 lg:px-10 pb-10 max-w-screen-xl mx-auto border-t border-border-subtle pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-secondary">
				<p>© {new Date().getFullYear()} Joshua Figueroa</p>
				<div className="flex gap-5">
					<Link
						to="/revdash/support"
						className="hover:text-white-100 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
					>
						Support
					</Link>
					<Link
						to="/revdash/privacy-policy"
						className="hover:text-white-100 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
					>
						Privacy Policy
					</Link>
				</div>
			</footer>
		</div>
	);
};

export default RevDashHome;
