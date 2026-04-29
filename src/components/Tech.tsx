/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import SectionWrapper from "./hoc/SectionWrapper";
import { technologies } from "../constants/techs";

const Tech = () => {
	return (
		<div className="flex flex-row flex-wrap justify-center gap-6">
			{technologies.map((tech, index) => (
				<motion.div
					key={tech.name}
					variants={fadeIn("up", "spring", index * 0.05, 0.5)}
					whileHover={{ scale: 1.1 }}
					className="w-24 h-24 bg-tertiary rounded-xl flex flex-col items-center justify-center gap-2 shadow-card cursor-default"
				>
					<img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
					<p className="text-secondary text-[11px] text-center leading-tight px-1">{tech.name}</p>
				</motion.div>
			))}
		</div>
	);
};

export default SectionWrapper(Tech, "tech");
