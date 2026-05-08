import { AnimatePresence, motion } from "framer-motion";
import { HiArrowUpOnSquare, HiPlus, HiXMark } from "react-icons/hi2";

type Props = {
	open: boolean;
	onClose: () => void;
};

const AddToHomeSheet = ({ open, onClose }: Props) => {
	return (
		<AnimatePresence>
			{open && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="absolute inset-0 z-40 bg-black/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-4"
					onClick={onClose}
				>
					<motion.div
						initial={{ y: 80, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: 80, opacity: 0 }}
						transition={{ type: "spring", stiffness: 320, damping: 32 }}
						onClick={(e) => e.stopPropagation()}
						className="w-full max-w-sm bg-tertiary rounded-ios-lg overflow-hidden border border-border-subtle"
					>
						<div className="flex items-center justify-between p-4 border-b border-border-subtle">
							<div className="w-8" />
							<h2 className="text-white font-semibold text-[15px]">Add to Home Screen</h2>
							<button
								onClick={onClose}
								className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
								aria-label="Close"
							>
								<HiXMark className="text-white" size={16} />
							</button>
						</div>

						<div className="p-5 text-white">
							<p className="text-secondary text-[14px] leading-relaxed mb-5">
								iPhone Safari blocks browser fullscreen, but you can install this site as a web app for the same effect.
							</p>

							<div className="space-y-3">
								<div className="flex items-center gap-3 bg-white/5 rounded-ios-card p-3">
									<div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0">
										<HiArrowUpOnSquare size={18} />
									</div>
									<div>
										<div className="text-[14px] font-medium">1. Tap the Share button</div>
										<div className="text-secondary text-[12px]">Bottom of Safari</div>
									</div>
								</div>

								<div className="flex items-center gap-3 bg-white/5 rounded-ios-card p-3">
									<div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0">
										<HiPlus size={18} />
									</div>
									<div>
										<div className="text-[14px] font-medium">2. Add to Home Screen</div>
										<div className="text-secondary text-[12px]">Then open from your Home Screen</div>
									</div>
								</div>
							</div>

							<button
								onClick={onClose}
								className="w-full mt-5 bg-violet text-white font-semibold py-3 rounded-ios-card hover:opacity-90 transition-opacity"
							>
								Got it
							</button>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default AddToHomeSheet;
