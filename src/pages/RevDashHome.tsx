import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import revdash from "../assets/projects/revdash.png";
import appStoreBadge from "../assets/app-store-badge.svg";
import driveView from "../assets/projects/revdash/drive_view.png";
import tripDetail from "../assets/projects/revdash/trip_detail.png";
import diagnostics from "../assets/projects/revdash/diagnostics.png";
import garage from "../assets/projects/revdash/garage.png";
import insights from "../assets/projects/revdash/insights.png";
import widgets from "../assets/projects/revdash/widgets.png";

const features = [
	{
		icon: "⚡",
		title: "Real-Time Data",
		desc: "Live speed, RPM, temperature, and engine load streamed directly from your vehicle.",
	},
	{
		icon: "🔌",
		title: "OBD-II Connected",
		desc: "Pairs wirelessly with any ELM327 BLE 4.0+ adapter plugged into your car's diagnostic port.",
	},
	{
		icon: "🗺️",
		title: "Trip Logging",
		desc: "Automatically records every drive with distance, duration, and fuel efficiency.",
	},
	{
		icon: "📊",
		title: "Custom Gauges",
		desc: "Configurable dashboard with the metrics that matter most to you.",
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

const ITEM_W = 220;
const GAP = 16;
const CONTAINER_W = 384;
const CENTER_OFFSET = (CONTAINER_W - ITEM_W) / 2;

const RevDashHome = () => {
	const [index, setIndex] = useState(0);

	const go = (next: number) => setIndex(Math.max(0, Math.min(screenshots.length - 1, next)));

	const handleDragEnd = (_: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
		const { offset, velocity } = info;
		if (velocity.x < -300 || offset.x < -50) go(index + 1);
		else if (velocity.x > 300 || offset.x > 50) go(index - 1);
	};

	return (
		<div className="min-h-screen bg-primary text-white-100">
			{/* Hero */}
			<section className="max-w-2xl mx-auto px-6 pt-20 pb-16 flex flex-col items-center text-center">
				<img src={revdash} alt="RevDash" className="w-24 h-24 rounded-[22px] shadow-lg mb-6" />
				<h1 className="text-5xl font-black tracking-tight text-white-100">RevDash</h1>
				<p className="mt-4 text-secondary text-lg max-w-sm leading-relaxed">
					The iOS driving dashboard that puts your car's data on your screen, in real time.
				</p>
				<a
					href="https://apps.apple.com/ph/app/revdash/id6764164749"
					target="_blank"
					rel="noopener noreferrer"
					className="mt-8 hover:opacity-80 transition-opacity"
				>
					<img src={appStoreBadge} alt="Download on the App Store" className="h-10 w-auto" />
				</a>
			</section>

			{/* Screenshot carousel */}
			<section className="pb-20 flex flex-col items-center gap-5">
				{/* Arrow + carousel row — arrows only visible on sm+ */}
				<div className="flex items-center gap-4">
					<button
						onClick={() => go(index - 1)}
						disabled={index === 0}
						className="hidden sm:flex w-9 h-9 rounded-full bg-tertiary border border-border-subtle items-center justify-center text-secondary hover:text-white-100 transition-colors disabled:opacity-25 disabled:cursor-not-allowed"
						aria-label="Previous screenshot"
					>
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
							<path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</button>

					{/* Clipping container — fixed width so peek amount is consistent */}
					<div className="overflow-hidden" style={{ width: CONTAINER_W }}>
						<motion.div
							className="flex cursor-grab active:cursor-grabbing"
							style={{ gap: GAP }}
							animate={{ x: CENTER_OFFSET - index * (ITEM_W + GAP) }}
							transition={{ type: "spring", stiffness: 320, damping: 32 }}
							drag="x"
							dragConstraints={{ left: 0, right: 0 }}
							dragElastic={0.12}
							onDragEnd={handleDragEnd}
						>
							{screenshots.map((s, i) => (
								<motion.img
									key={s.alt}
									src={s.src}
									alt={s.alt}
									className="rounded-3xl shadow-2xl border border-border-subtle object-cover flex-shrink-0 select-none"
									style={{ width: ITEM_W, height: Math.round(ITEM_W * 2.166) }}
									animate={{
										scale: i === index ? 1 : 0.93,
										opacity: i === index ? 1 : 0.4,
									}}
									transition={{ type: "spring", stiffness: 320, damping: 32 }}
									draggable={false}
								/>
							))}
						</motion.div>
					</div>

					<button
						onClick={() => go(index + 1)}
						disabled={index === screenshots.length - 1}
						className="hidden sm:flex w-9 h-9 rounded-full bg-tertiary border border-border-subtle items-center justify-center text-secondary hover:text-white-100 transition-colors disabled:opacity-25 disabled:cursor-not-allowed"
						aria-label="Next screenshot"
					>
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
							<path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</button>
				</div>

				{/* Dots */}
				<div className="flex gap-2 items-center">
					{screenshots.map((_, i) => (
						<button
							key={i}
							onClick={() => go(i)}
							className={`rounded-full transition-all duration-300 ${
								i === index
									? "w-5 h-2 bg-white-100"
									: "w-2 h-2 bg-secondary opacity-40 hover:opacity-70"
							}`}
							aria-label={`Go to screenshot ${i + 1}`}
						/>
					))}
				</div>

				<p className="text-secondary text-sm">{screenshots[index].alt}</p>
			</section>

			{/* Features */}
			<section className="max-w-2xl mx-auto px-6 pb-20">
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					{features.map((f) => (
						<div key={f.title} className="bg-tertiary rounded-2xl p-6">
							<span className="text-2xl">{f.icon}</span>
							<h3 className="text-white-100 font-semibold mt-3 mb-1">{f.title}</h3>
							<p className="text-secondary text-sm leading-relaxed">{f.desc}</p>
						</div>
					))}
				</div>
			</section>

			{/* Footer links */}
			<footer className="max-w-2xl mx-auto px-6 pb-12 flex flex-col items-center gap-4 border-t border-border-subtle pt-8">
				<a
					href="https://apps.apple.com/ph/app/revdash/id6764164749"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:opacity-80 transition-opacity"
				>
					<img src={appStoreBadge} alt="Download on the App Store" className="h-10 w-auto" />
				</a>
				<div className="flex gap-6 text-sm">
					<Link to="/revdash/support" className="text-secondary hover:text-white-100 transition-colors">
						Support
					</Link>
					<Link to="/revdash/privacy-policy" className="text-secondary hover:text-white-100 transition-colors">
						Privacy Policy
					</Link>
				</div>
				<p className="text-[12px] text-secondary opacity-50">© {new Date().getFullYear()} Joshua Figueroa</p>
			</footer>
		</div>
	);
};

export default RevDashHome;
