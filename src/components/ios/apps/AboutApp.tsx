import { services } from "../../../constants/service";
import avatar from "../../../assets/joshua.webp";

const ChevronRight = () => (
	<svg width="9" height="14" viewBox="0 0 9 14" className="text-white/30 flex-shrink-0">
		<path
			d="M1 1L7 7L1 13"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
			fill="none"
		/>
	</svg>
);

const AboutApp = () => {
	return (
		<div className="px-5 pb-20 pt-2 text-white max-w-2xl mx-auto">
			{/* Hero card — icon, title, description */}
			<div className="bg-tertiary/60 rounded-ios-card p-5 md:p-8 mb-6 border border-border-subtle md:flex md:flex-col md:items-center md:text-center">
				<div className="w-16 h-16 md:w-20 md:h-20 rounded-[18px] overflow-hidden mb-4 select-none">
					<img src={avatar} alt="Joshua Figueroa" className="w-full h-full object-cover" draggable={false} />
				</div>
				<h2 className="text-[28px] font-bold tracking-tight leading-tight mb-2">Joshua Figueroa</h2>
				<p className="text-secondary text-[15px] leading-relaxed md:max-w-md">
					Software engineer building thoughtful products across web, mobile, and embedded. I care about the
					small details that turn working software into something people actually enjoy using.
				</p>
			</div>

			{/* What I do — list with icons, labels, chevrons */}
			<div>
				<div className="text-[13px] text-secondary uppercase tracking-wider mb-2 px-4">What I do</div>
				<div className="bg-tertiary/60 rounded-ios-card overflow-hidden border border-border-subtle">
					{services.map((s, i) => (
						<div
							key={s.title}
							className={`flex items-center gap-4 px-5 py-4 ${
								i !== services.length - 1 ? "border-b border-border-subtle" : ""
							}`}
						>
							<div className="w-9 h-9 rounded-[10px] bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
								<img src={s.icon} alt={s.title} className="w-5 h-5 object-contain" />
							</div>
							<span className="text-white text-[16px] flex-1">{s.title}</span>
							<ChevronRight />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default AboutApp;
