/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";

import { github } from "../assets";
import SectionWrapper from "./hoc/SectionWrapper";
import { childVariants, containerVariants, fadeIn, textVariant } from "../utils/motion";
import { Project } from "../models/project";
import { projects } from "../constants/projects";

type ProjectCardProps = {
	project: Project;
	index: number;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
	return (
		<motion.div variants={childVariants} className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
			<div
				className="relative w-full h-fit cursor-pointer"
				onClick={() => window.open(project.published_link ?? project.source_code_link, "_blank")}
			>
				<img src={project.image} alt="project_image" className="w-full h-[230px] object-cover rounded-2xl" />
				{project.source_code_link && (
					<div className="absolute inset-0 flex justify-end m-3 card-img_hover">
						<div
							className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
							onClick={() => window.open(project.source_code_link, "_blank")}
						>
							<img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
						</div>
					</div>
				)}
			</div>

			<div className="mt-5">
				<h3 className="text-white-100 font-bold text-[24px]">{project.name}</h3>
				<p className="mt-2 text-secondary text-[14px]">{project.description}</p>
			</div>

			<div className="mt-4 flex flex-wrap gap-2">
				{project.tags.map((tag) => (
					<p key={`${project.name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
						#{tag.name}
					</p>
				))}
			</div>
		</motion.div>
	);
};

const Works = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className="section-sub-text">My projects</p>
				<h2 className="section-head-text">Projects.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
			>
				These projects showcase my skills and experience, featuring links to code repositories and live demos.
				They highlight my problem-solving abilities, technological versatility, and project management skills.
			</motion.p>

			<motion.div
				initial="hidden"
				animate="visible"
				variants={containerVariants}
				className="mt-20 flex flex-wrap gap-7 justify-center"
			>
				{projects.map((project, index) => (
					<ProjectCard key={index} project={project} index={index} />
				))}
			</motion.div>
		</>
	);
};

export default SectionWrapper(Works, "work");
