import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";
import inkognitoIcon from "../assets/projects/inkognito.png";

const TEAL = "#0D9E85";

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

const features: {
	id: string;
	icon: string;
	label: string;
	body: string;
}[] = [
	{
		id: "airprint",
		icon: "📡",
		label: "AirPrint identity",
		body: "Broadcasts your printer as a native AirPrint endpoint over Bonjour — exactly how Apple's own printers appear. iPhones and iPads see it instantly in the print sheet.",
	},
	{
		id: "cups",
		icon: "🔗",
		label: "CUPS native",
		body: "Talks directly to macOS's built-in CUPS layer. No middleware, no third-party print server. The same engine Apple uses, configured correctly.",
	},
	{
		id: "jobs",
		icon: "📋",
		label: "Live job feed",
		body: "Watches the print queue in real time. Every job that arrives from a phone shows its source device, status, and completion — all in one sidebar.",
	},
	{
		id: "menubar",
		icon: "🔒",
		label: "Menu bar control",
		body: "A status-bar icon gives you instant access to sharing controls without hunting through menus. Open the window when you need it, close it when you don't.",
	},
];

const steps = [
	{
		n: "01",
		title: "Open Inkognito",
		body: "Launch from Applications. Grant the one permission it needs — Printer Sharing. The built-in button takes you straight to System Settings.",
	},
	{
		n: "02",
		title: "Pick your printer",
		body: "Inkognito discovers every printer macOS knows about. Select the one you want to share — USB, network, or IPP.",
	},
	{
		n: "03",
		title: "Toggle sharing on",
		body: "Flip the switch. Bonjour starts broadcasting. Your printer appears on every iPhone and iPad on the network within seconds.",
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

const InkognitoHome = () => {
	usePageMeta({
		title: "Inkognito — Your Printer's Secret Identity",
		description:
			"A macOS app that gives any USB or network printer an AirPrint identity, letting iPhones and iPads print to it wirelessly — no server, no driver, no fuss.",
		url: "https://joshuafigueroa.dev/inkognito",
		image: "https://joshuafigueroa.dev/inkognito-icon.png",
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

				<button
					disabled
					aria-disabled="true"
					title="Coming soon"
					className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold cursor-not-allowed select-none"
					style={{
						background: "rgba(13,158,133,0.08)",
						color: "rgba(13,158,133,0.4)",
						border: "1px solid rgba(13,158,133,0.15)",
					}}
				>
					<IconDownload />
					Download
				</button>
			</header>

			{/* ─────────────────── Marquee Hero ─────────────────── */}
			<section className="pt-28 lg:pt-44 pb-20 lg:pb-32 px-5 sm:px-8 lg:px-10 max-w-screen-xl mx-auto flex flex-col items-center text-center">
				{/* App icon */}
				<motion.div
					className="mb-8"
					initial={{ opacity: 0, scale: 0.88 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
				>
					<div className="relative inline-flex">
						<div
							className="absolute rounded-full pointer-events-none"
							style={{
								inset: "-35%",
								background: `radial-gradient(circle, ${TEAL}28 0%, transparent 65%)`,
								filter: "blur(28px)",
							}}
							aria-hidden
						/>
						<img
							src={inkognitoIcon}
							alt="Inkognito"
							className="relative w-24 h-24 lg:w-32 lg:h-32 rounded-[22.37%] select-none"
							style={{
								boxShadow: "0 24px 80px rgba(0,0,0,0.55), 0 4px 16px rgba(0,0,0,0.4)",
							}}
							draggable={false}
						/>
					</div>
				</motion.div>

				{/* Label */}
				<motion.p
					className="text-xs font-bold uppercase tracking-widest mb-5"
					style={{ color: TEAL }}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.4, delay: 0.1 }}
				>
					macOS menu bar utility
				</motion.p>

				{/* Marquee headline */}
				<motion.h1
					className="font-black tracking-tight text-white-100 leading-[1.02] mb-6"
					style={{
						fontSize: "clamp(2.8rem, 9vw, 5.75rem)",
						overflowWrap: "anywhere",
						minWidth: 0,
					}}
					initial={{ opacity: 0, y: 22 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.55, delay: 0.14 }}
				>
					Your printer's <span style={{ color: TEAL }}>secret identity.</span>
				</motion.h1>

				{/* Subhead */}
				<motion.p
					className="text-secondary text-base lg:text-[1.05rem] leading-relaxed max-w-[480px] mb-10"
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.22 }}
				>
					Inkognito wraps any USB or network printer in an AirPrint identity. Enable sharing — your iPhone and
					iPad see it in the print sheet instantly.
				</motion.p>

				{/* CTA + pills */}
				<motion.div
					className="flex flex-col items-center gap-4"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.32 }}
				>
					<div className="relative">
						<span
							className="absolute -top-6 left-1/2 -translate-x-1/2 text-[11px] font-bold uppercase tracking-widest whitespace-nowrap"
							style={{ color: TEAL }}
						>
							Coming soon
						</span>
						<button
							disabled
							aria-disabled="true"
							className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-[15px] font-semibold cursor-not-allowed select-none"
							style={{
								background: "rgba(13,158,133,0.09)",
								color: "rgba(13,158,133,0.42)",
								border: "1px solid rgba(13,158,133,0.18)",
							}}
						>
							<IconDownload />
							Download for macOS
						</button>
					</div>

					<div className="flex flex-wrap justify-center gap-2">
						{["macOS 14+", "Free"].map((tag) => (
							<SpecPill key={tag}>{tag}</SpecPill>
						))}
					</div>
				</motion.div>
			</section>

			{/* ─────────────────── Steps ─────────────────── */}
			<section className="px-5 sm:px-8 lg:px-10 pb-20 max-w-screen-xl mx-auto">
				<motion.h2
					className="text-white-100 font-black text-xl lg:text-2xl tracking-tight mb-6 text-center lg:text-left"
					variants={fadeUp}
					custom={0}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
				>
					Three steps to AirPrint.
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
								className="font-black leading-none select-none"
								style={{ fontSize: "clamp(2.5rem, 8vw, 3.75rem)", color: `${TEAL}1A` }}
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

			{/* ─────────────────── Features ─────────────────── */}
			<section className="px-5 sm:px-8 lg:px-10 pb-20 max-w-screen-xl mx-auto">
				<motion.h2
					className="text-white-100 font-black text-xl lg:text-2xl tracking-tight mb-6 text-center lg:text-left"
					variants={fadeUp}
					custom={0}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
				>
					Built into macOS. Nothing extra.
				</motion.h2>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
					{features.map((f, i) => (
						<motion.div
							key={f.id}
							className="flex flex-col gap-4 rounded-2xl border border-border-subtle p-6 lg:p-8 bg-black-100"
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

			{/* ─────────────────── Download CTA placeholder ─────────────────── */}
			<section className="px-5 sm:px-8 lg:px-10 pb-24 max-w-screen-xl mx-auto">
				<motion.div
					className="rounded-3xl border p-8 lg:px-14 lg:py-14 flex flex-col items-center text-center lg:flex-row lg:items-center lg:justify-between lg:text-left gap-8"
					style={{
						borderColor: "rgba(13,158,133,0.2)",
						background:
							"radial-gradient(ellipse at 25% 60%, rgba(13,158,133,0.06) 0%, transparent 60%), var(--color-black-100)",
					}}
					variants={fadeUp}
					custom={0}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
				>
					<div>
						<h2
							className="font-black tracking-tight text-white-100"
							style={{
								fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
								overflowWrap: "anywhere",
								minWidth: 0,
							}}
						>
							Ready to print?
						</h2>
						<p className="text-secondary mt-2 text-sm">Free · macOS 14+ · Coming soon</p>
					</div>

					<div className="flex-shrink-0 flex flex-col items-center lg:items-end gap-2">
						<button
							disabled
							aria-disabled="true"
							className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-[15px] font-bold cursor-not-allowed select-none"
							style={{
								background: "rgba(13,158,133,0.08)",
								color: "rgba(13,158,133,0.38)",
								border: "1px solid rgba(13,158,133,0.16)",
							}}
						>
							<IconDownload />
							Download Inkognito.dmg
						</button>
						<span
							className="text-[11px] font-semibold uppercase tracking-wider"
							style={{ color: "rgba(13,158,133,0.5)" }}
						>
							DMG available soon
						</span>
					</div>
				</motion.div>
			</section>

			{/* ─────────────────── Footer ─────────────────── */}
			<footer className="px-5 sm:px-8 lg:px-10 pb-10 max-w-screen-xl mx-auto border-t border-border-subtle pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-secondary">
				<p>© {new Date().getFullYear()} Joshua Figueroa</p>
				<p style={{ opacity: 0.45 }}>Free · macOS 14+</p>
			</footer>
		</div>
	);
};

export default InkognitoHome;
