import buff from "../assets/projects/buff.png";

const features = [
	{
		icon: "🚫",
		title: "Total Input Block",
		desc: "Swallows every keystroke, click, scroll, and trackpad gesture for the duration you choose.",
	},
	{
		icon: "⏱",
		title: "Finite by Design",
		desc: "Always auto-releases on a deadline. No indefinite blocks — worst case is a short pause, never a hard reboot.",
	},
	{
		icon: "🖥",
		title: "Full-Screen Countdown",
		desc: "Optional translucent overlay shows remaining time across every screen and space.",
	},
	{
		icon: "📍",
		title: "Lives in the Menu Bar",
		desc: "No Dock icon, no main window. Just a status-bar accessory you can summon and forget.",
	},
];

const steps = [
	"Download the DMG and drag Buff into Applications.",
	"Open Buff. macOS will ask for Accessibility permission — the popover has a button that jumps straight to the right pane.",
	"Click the menu bar icon, pick a duration, hit Start, and wipe away.",
];

const BuffHome = () => {
	return (
		<div className="min-h-screen bg-primary text-white-100">
			<section className="max-w-2xl mx-auto px-6 pt-20 pb-16 flex flex-col items-center text-center">
				<img src={buff} alt="Buff" className="w-24 h-24 rounded-[22px] shadow-lg mb-6" />
				<h1 className="text-5xl font-black tracking-tight text-white-100">Buff</h1>
				<p className="mt-4 text-secondary text-lg max-w-sm leading-relaxed">
					A macOS menu bar app that temporarily blocks all keyboard and trackpad input so you can wipe your
					screen and keys without triggering anything.
				</p>

				<a
					href="/Buff.dmg"
					download="Buff.dmg"
					className="mt-8 inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-black font-semibold text-[15px] hover:opacity-90 transition-opacity shadow-lg"
				>
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
						<path
							d="M8 1.5V10M8 10L4.5 6.5M8 10L11.5 6.5"
							stroke="currentColor"
							strokeWidth="1.7"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M2 12.5V13.5C2 13.7761 2.22386 14 2.5 14H13.5C13.7761 14 14 13.7761 14 13.5V12.5"
							stroke="currentColor"
							strokeWidth="1.7"
							strokeLinecap="round"
						/>
					</svg>
					Download for macOS
				</a>
				<p className="mt-3 text-[12px] text-secondary opacity-60">
					Free · macOS 15+ · Direct download (not on the Mac App Store)
				</p>
			</section>

			{/* Features */}
			<section className="max-w-2xl mx-auto px-6 pb-16">
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

			<section className="max-w-2xl mx-auto px-6 pb-20">
				<h2 className="text-white-100 font-bold text-2xl mb-5">Getting started</h2>
				<ol className="flex flex-col gap-3">
					{steps.map((step, i) => (
						<li key={i} className="flex gap-3 bg-tertiary rounded-2xl p-5">
							<span className="flex-shrink-0 w-7 h-7 rounded-full bg-white-100 text-black font-bold text-sm flex items-center justify-center">
								{i + 1}
							</span>
							<p className="text-secondary text-sm leading-relaxed pt-0.5">{step}</p>
						</li>
					))}
				</ol>
			</section>

			<footer className="max-w-2xl mx-auto px-6 pb-12 flex flex-col items-center gap-4 border-t border-border-subtle pt-8">
				<a
					href="/Buff.dmg"
					download="Buff.dmg"
					className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:opacity-90 transition-opacity"
				>
					Download Buff.dmg
				</a>
				<p className="text-[12px] text-secondary opacity-50">
					© {new Date().getFullYear()} Joshua Figueroa · MIT licensed
				</p>
			</footer>
		</div>
	);
};

export default BuffHome;
