import { technologies } from "../../../constants/techs";

const groups = [
	{
		title: "Languages & Frontend",
		items: ["JavaScript", "TypeScript", "React JS", "NextJS", "Tailwind CSS"],
	},
	{
		title: "Mobile",
		items: ["SwiftUI", "Flutter"],
	},
	{
		title: "Backend & Infra",
		items: ["Node JS", "Golang", "Springboot", "Firebase", "MySQL", "Docker"],
	},
	{
		title: "Hardware",
		items: ["Arduino"],
	},
];

const TechApp = () => {
	return (
		<div className="px-6 pb-20 text-white">
			<div className="mb-6">
				<h1 className="text-[34px] font-bold tracking-tight">Tech Stack</h1>
				<p className="text-secondary text-[15px] mt-1">{technologies.length} tools</p>
			</div>

			<div className="space-y-7">
				{groups.map((g) => {
					const items = technologies.filter((t) => g.items.includes(t.name));
					if (!items.length) return null;
					return (
						<div key={g.title}>
							<div className="text-[12px] text-secondary uppercase tracking-wider mb-2 px-2">
								{g.title}
							</div>
							<div className="bg-tertiary/60 rounded-ios-card overflow-hidden border border-border-subtle">
								{items.map((t, i) => (
									<div
										key={t.name}
										className={`flex items-center gap-4 px-4 py-3 ${
											i !== items.length - 1 ? "border-b border-border-subtle" : ""
										}`}
									>
										<div className="w-10 h-10 rounded-[12px] bg-white/5 flex items-center justify-center flex-shrink-0 p-1.5">
											<img src={t.icon} alt={t.name} className="w-full h-full object-contain" />
										</div>
										<span className="text-white text-[15px] flex-1">{t.name}</span>
										<svg width="9" height="14" viewBox="0 0 9 14" className="text-white/30 flex-shrink-0">
											<path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
										</svg>
									</div>
								))}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default TechApp;
