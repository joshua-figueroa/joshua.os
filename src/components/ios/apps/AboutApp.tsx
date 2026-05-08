import { services } from "../../../constants/service";

const AboutApp = () => {
	return (
		<div className="px-6 pb-20 text-white">
			<div className="mb-8">
				<h1 className="text-[34px] font-bold tracking-tight">About</h1>
				<p className="text-secondary text-[15px] mt-1">Pinned</p>
			</div>

			<div className="bg-tertiary/60 rounded-ios-card p-5 mb-6 border border-border-subtle">
				<div className="text-[12px] text-secondary uppercase tracking-wider mb-3">Joshua Figueroa</div>
				<h2 className="text-[20px] font-semibold mb-3">
					Software engineer building thoughtful products across web, mobile, and embedded.
				</h2>
				<p className="text-secondary text-[15px] leading-relaxed">
					I'm a developer who loves shipping. Whether it's a SwiftUI app talking to a vehicle ECU, a
					full-stack React product, or a Flutter mobile build, I care about the small details that turn
					working software into something people actually enjoy using.
				</p>
				<p className="text-secondary text-[15px] leading-relaxed mt-3">
					Currently independent — working out of Manila on RevDash and consulting projects.
				</p>
			</div>

			<div>
				<div className="text-[13px] text-secondary uppercase tracking-wider mb-3 px-2">What I do</div>
				<div className="bg-tertiary/60 rounded-ios-card overflow-hidden border border-border-subtle">
					{services.map((s, i) => (
						<div
							key={s.title}
							className={`flex items-center gap-4 px-5 py-4 ${
								i !== services.length - 1 ? "border-b border-border-subtle" : ""
							}`}
						>
							<div className="w-10 h-10 rounded-[12px] bg-violet/20 flex items-center justify-center flex-shrink-0">
								<img src={s.icon} alt={s.title} className="w-6 h-6 object-contain" />
							</div>
							<span className="text-white text-[16px] font-medium">{s.title}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default AboutApp;
