import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
	const [showCanvas, setShowCanvas] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setShowCanvas(true), 100);
		return () => clearTimeout(timer);
	}, []);

	return (
		<section className="relative w-full h-screen mx-auto">
			<div className="padding-x absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-violet" />
					<div className="w-1 sm:h-80 h-40 violet-gradient" />
				</div>
				<div className="">
					<h1 className="hero-head-text">
						Hi, I'm <span className="text-violet">Joshua</span>
					</h1>
					<p className="hero-sub-text mt-2 text-white-100">
						I develop cross-platform apps, user <br className="sm:block hidden" /> interfaces, and
						full-stack web applications.
					</p>
				</div>
			</div>

			{showCanvas && <ComputersCanvas />}

			<div className="absolute xs:bottom-10 bottom-24 w-full flex justify-center items-center">
				<a href="#about">
					<div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
						<motion.div
							animate={{ y: [0, 24, 0] }}
							transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
							className="w-3 h-3 rounded-full bg-secondary mb-1"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
