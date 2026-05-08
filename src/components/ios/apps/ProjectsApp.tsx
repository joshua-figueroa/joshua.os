import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../../constants/projects";

const ProjectsApp = () => {
	const [openIdx, setOpenIdx] = useState<number | null>(null);
	const open = openIdx !== null ? projects[openIdx] : null;

	return (
		<div className="px-6 pb-20 text-white">
			<div className="mb-6">
				<h1 className="text-[34px] font-bold tracking-tight">Projects</h1>
				<p className="text-secondary text-[15px] mt-1">{projects.length} apps</p>
			</div>

			<div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
				{projects.map((p, i) => (
					<button
						key={p.name}
						onClick={() => setOpenIdx(i)}
						className="bg-tertiary/60 rounded-ios-card overflow-hidden border border-border-subtle text-left hover:bg-tertiary/80 transition-colors"
					>
						<div className="aspect-[4/3] overflow-hidden">
							<img src={p.image} alt={p.name} className="w-full h-full object-cover" />
						</div>
						<div className="p-3">
							<div className="font-semibold text-[14px] truncate">{p.name}</div>
							<div className="text-secondary text-[11px] mt-0.5">
								{p.tags.map((t) => t.name).join(" · ")}
							</div>
						</div>
					</button>
				))}
			</div>

			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="absolute inset-0 z-40 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-4"
						onClick={() => setOpenIdx(null)}
					>
						<motion.div
							initial={{ y: 60, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: 60, opacity: 0 }}
							transition={{ type: "spring", stiffness: 320, damping: 32 }}
							onClick={(e) => e.stopPropagation()}
							className="w-full max-w-md bg-tertiary rounded-ios-lg overflow-hidden border border-border-subtle max-h-[85vh] overflow-y-auto no-scrollbar"
						>
							<div className="aspect-video overflow-hidden">
								<img src={open.image} alt={open.name} className="w-full h-full object-cover" />
							</div>
							<div className="p-5">
								<div className="flex items-start justify-between gap-3">
									<h2 className="text-[22px] font-bold leading-tight">{open.name}</h2>
									<button
										onClick={() => setOpenIdx(null)}
										className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0"
										aria-label="Close"
									>
										<svg width="11" height="11" viewBox="0 0 14 14"><path d="M3 3L11 11M11 3L3 11" stroke="white" strokeWidth="1.7" strokeLinecap="round" /></svg>
									</button>
								</div>
								<div className="flex flex-wrap gap-1.5 mt-3">
									{open.tags.map((t) => (
										<span key={t.name} className="text-[11px] px-2.5 py-1 rounded-full bg-violet/20 text-white/90 font-medium">
											{t.name}
										</span>
									))}
								</div>
								<p className="text-secondary text-[14px] leading-relaxed mt-4">{open.description}</p>
								<div className="flex flex-col gap-2 mt-5">
									{open.published_link && (
										<a
											href={open.published_link}
											target={open.published_link.startsWith("/") ? "_self" : "_blank"}
											rel="noopener noreferrer"
											className="bg-violet text-white text-center font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity"
										>
											Open
										</a>
									)}
									{open.source_code_link && (
										<a
											href={open.source_code_link}
											target="_blank"
											rel="noopener noreferrer"
											className="bg-white/10 text-white text-center font-semibold py-3 rounded-xl hover:bg-white/15 transition-colors"
										>
											View Source
										</a>
									)}
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default ProjectsApp;
