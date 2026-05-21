import cn from "classnames";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";
import buffIcon from "../assets/projects/buff.png";

const BUFF_CORAL = "#E07A5F";

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

const bentoFeatures: {
	id: string;
	desktopSpan: string;
	icon: string;
	label: string;
	body: string;
}[] = [
	{
		id: "block",
		desktopSpan: "lg:col-span-2",
		icon: "🚫",
		label: "Total input block",
		body: "Every keydown, key-up, modifier change, mouse button, drag, scroll, and trackpad gesture — swallowed at the session event tap before the system can act on them. Nothing gets through.",
	},
	{
		id: "menu",
		desktopSpan: "lg:col-span-1",
		icon: "📍",
		label: "Menu bar only",
		body: "No Dock icon. No main window. A status-bar accessory you summon on demand and forget about the rest of the time.",
	},
	{
		id: "timer",
		desktopSpan: "lg:col-span-1",
		icon: "⏱",
		label: "Set a duration",
		body: "Pick seconds with a stepper. Buff auto-releases when the timer hits zero — no manual reset, no stuck state.",
	},
	{
		id: "overlay",
		desktopSpan: "lg:col-span-2",
		icon: "🖥",
		label: "Full-screen countdown",
		body: "Optional translucent overlay sits at screen-saver level across every display and Space, showing remaining time while you wipe.",
	},
];

const steps = [
	{
		n: "01",
		title: "Download & install",
		body: "Drag Buff from the DMG into Applications. macOS 15 or later required.",
	},
	{
		n: "02",
		title: "Grant Accessibility",
		body: "One permission needed. The built-in button takes you straight to the right pane in System Settings.",
	},
	{
		n: "03",
		title: "Click, wipe, done.",
		body: "Open the menu bar icon, pick a duration, hit Start. Buff releases automatically when the timer hits zero.",
	},
];

const IconDownload = ({ size = 16 }: { size?: number }) => (
	<svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
		<path
			d="M8 2v7.5M8 9.5L5 6.5M8 9.5l3-3"
			stroke="currentColor"
			strokeWidth="1.6"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path d="M2.5 12.5h11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
	</svg>
);

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

const SpecPill = ({ children }: { children: React.ReactNode }) => (
	<span className="inline-flex items-center gap-1.5 text-xs text-secondary border border-border-default rounded-full px-3 py-1 w-fit">
		{children}
	</span>
);

const BuffHome = () => {
	usePageMeta({
		title: "Buff — Block Input. Wipe Freely.",
		description:
			"A tiny macOS menu bar app that blocks all keyboard and trackpad input on a timer so you can clean your screen and keys without triggering a thing.",
		url: "https://joshuafigueroa.dev/buff",
		image: "https://joshuafigueroa.dev/buff-icon.png",
	});

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
					href="/Buff.dmg"
					download="Buff.dmg"
					className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-black text-sm font-semibold hover:opacity-85 active:scale-[0.97] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
				>
					<IconDownload />
					Download
				</a>
			</header>

			{/* ─────────────────── Hero ─────────────────── */}
			<section className="pt-28 lg:pt-40 pb-16 lg:pb-28 px-5 sm:px-8 lg:px-10 max-w-screen-xl mx-auto">
				<div className="flex flex-col items-center text-center lg:grid lg:grid-cols-[auto_1fr] lg:items-center lg:text-left lg:gap-20 gap-8">
					{/* Left / top: icon + desktop spec pills */}
					<motion.div
						className="flex flex-col items-center lg:items-start gap-5"
						initial={{ opacity: 0, scale: 0.88 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
					>
						<div className="relative">
							<div
								className="absolute rounded-full pointer-events-none"
								style={{
									inset: "-30%",
									background: `radial-gradient(circle, ${BUFF_CORAL}38 0%, transparent 68%)`,
									filter: "blur(24px)",
								}}
								aria-hidden
							/>
							<img
								src={buffIcon}
								alt="Buff"
								className="relative w-28 h-28 lg:w-40 lg:h-40 rounded-[28px] select-none"
								style={{
									boxShadow: "0 24px 80px rgba(0,0,0,0.55), 0 4px 16px rgba(0,0,0,0.4)",
								}}
								draggable={false}
							/>
						</div>

						{/* Desktop-only spec pills */}
						<div className="hidden lg:flex flex-col gap-2">
							<SpecPill>
								<span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" aria-hidden />
								macOS 15 or later
							</SpecPill>
							<SpecPill>Free · 2.1 MB</SpecPill>
						</div>
					</motion.div>

					{/* Right / bottom: copy + CTA */}
					<div className="flex flex-col items-center lg:items-start gap-5 max-w-xl lg:max-w-none">
						<motion.p
							className="text-xs font-bold uppercase tracking-widest"
							style={{ color: BUFF_CORAL }}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.4, delay: 0.1 }}
						>
							macOS menu bar utility
						</motion.p>

						<motion.h1
							className="font-black tracking-tight text-white-100 leading-[1.04]"
							style={{
								fontSize: "clamp(2.4rem, 7vw, 3.75rem)",
								overflowWrap: "anywhere",
								minWidth: 0,
							}}
							initial={{ opacity: 0, y: 18 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.14 }}
						>
							Block everything. <span style={{ color: BUFF_CORAL }}>Wipe freely.</span>
						</motion.h1>

						<motion.p
							className="text-secondary text-base lg:text-[1.05rem] leading-relaxed max-w-md"
							initial={{ opacity: 0, y: 12 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.21 }}
						>
							A tiny menu bar app that halts all keyboard and trackpad input for exactly as long as you
							need — then auto-releases on a timer — so you can clean your screen and keys without
							triggering a single thing.
						</motion.p>

						<motion.div
							className="flex flex-col lg:flex-row items-center gap-3 pt-1 w-full lg:w-auto"
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.3 }}
						>
							<a
								href="/Buff.dmg"
								download="Buff.dmg"
								className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-white text-black font-semibold text-[15px] hover:opacity-90 active:scale-[0.97] transition-all duration-150 shadow-lg w-full lg:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
							>
								<IconDownload />
								Download for macOS
							</a>
						</motion.div>

						{/* Mobile-only spec pills */}
						<motion.div
							className="flex lg:hidden flex-wrap justify-center gap-2 pt-1"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.4, delay: 0.38 }}
						>
							{["macOS 15+", "Free", "2.1 MB"].map((tag) => (
								<span
									key={tag}
									className="text-xs text-secondary border border-border-default rounded-full px-3 py-1"
								>
									{tag}
								</span>
							))}
						</motion.div>
					</div>
				</div>
			</section>

			{/* ─────────────────── Feature Bento ─────────────────── */}
			<section className="px-5 sm:px-8 lg:px-10 pb-20 max-w-screen-xl mx-auto">
				<motion.h2
					className="text-white-100 font-black text-xl lg:text-2xl tracking-tight mb-6 text-center lg:text-left"
					variants={fadeUp}
					custom={0}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
				>
					Built tight. Stays quiet.
				</motion.h2>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-4">
					{bentoFeatures.map((f, i) => (
						<motion.div
							key={f.id}
							className={cn(
								"flex flex-col gap-4 rounded-2xl border border-border-subtle p-6 lg:p-8 bg-black-100",
								f.desktopSpan
							)}
							variants={fadeUp}
							custom={i * 0.07}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.12 }}
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

			{/* ─────────────────── Setup steps ─────────────────── */}
			<section className="px-5 sm:px-8 lg:px-10 pb-20 max-w-screen-xl mx-auto">
				<motion.h2
					className="text-white-100 font-black text-xl lg:text-2xl tracking-tight mb-6 text-center lg:text-left"
					variants={fadeUp}
					custom={0}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
				>
					Up in three steps
				</motion.h2>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-4">
					{steps.map((s, i) => (
						<motion.div
							key={s.n}
							className="flex flex-col gap-3 rounded-2xl border border-border-subtle bg-tertiary p-6 lg:p-8"
							variants={fadeUp}
							custom={i * 0.1}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.2 }}
						>
							<span
								className="font-black leading-none select-none text-[3rem] lg:text-[4rem]"
								style={{ color: "rgba(240,238,232,0.07)" }}
								aria-hidden
							>
								{s.n}
							</span>
							<h3 className="text-white-100 font-semibold text-[15px]">{s.title}</h3>
							<p className="text-secondary text-sm leading-relaxed">{s.body}</p>
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
							Ready to wipe?
						</h2>
						<p className="text-secondary mt-2 text-sm">Free · macOS 15+ · 1.9 MB · MIT licensed</p>
					</div>
					<a
						href="/Buff.dmg"
						download="Buff.dmg"
						className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-bold text-[15px] hover:opacity-90 active:scale-[0.97] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
					>
						<IconDownload />
						Download Buff.dmg
					</a>
				</motion.div>
			</section>

			{/* ─────────────────── Footer ─────────────────── */}
			<footer className="px-5 sm:px-8 lg:px-10 pb-10 max-w-screen-xl mx-auto border-t border-border-subtle pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-secondary">
				<p>© {new Date().getFullYear()} Joshua Figueroa</p>
				<p style={{ opacity: 0.45 }}>MIT licensed</p>
			</footer>
		</div>
	);
};

export default BuffHome;
