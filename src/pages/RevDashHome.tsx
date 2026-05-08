import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

const RevDashHome = () => {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		align: "center",
		loop: true,
	});

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
				<div className="flex items-center gap-4 w-full max-w-sm px-0">
					<button
						onClick={() => emblaApi?.scrollPrev()}
						className="hidden sm:flex flex-shrink-0 w-9 h-9 rounded-full bg-tertiary border border-border-subtle items-center justify-center text-secondary hover:text-white-100 transition-colors"
						aria-label="Previous"
					>
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
							<path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</button>

					<div className="overflow-hidden flex-1" ref={emblaRef}>
						<div className="flex">
							{screenshots.map((s, i) => (
								<div key={s.alt} className="flex-shrink-0 px-2" style={{ width: "75%" }}>
									<motion.img
										src={s.src}
										alt={s.alt}
										className="w-full h-auto rounded-3xl shadow-2xl border border-border-subtle select-none"
										animate={{
											scale: i === selectedIndex ? 1 : 0.92,
											opacity: i === selectedIndex ? 1 : 0.4,
										}}
										transition={{ type: "spring", stiffness: 300, damping: 30 }}
										draggable={false}
									/>
								</div>
							))}
						</div>
					</div>

					<button
						onClick={() => emblaApi?.scrollNext()}
						className="hidden sm:flex flex-shrink-0 w-9 h-9 rounded-full bg-tertiary border border-border-subtle items-center justify-center text-secondary hover:text-white-100 transition-colors"
						aria-label="Next"
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
							onClick={() => emblaApi?.scrollTo(i)}
							className={`rounded-full transition-all duration-300 ${
								i === selectedIndex
									? "w-5 h-2 bg-white-100"
									: "w-2 h-2 bg-secondary opacity-40 hover:opacity-70"
							}`}
							aria-label={`Go to screenshot ${i + 1}`}
						/>
					))}
				</div>

				<p className="text-secondary text-sm">{screenshots[selectedIndex].alt}</p>
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
