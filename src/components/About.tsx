/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { services } from "../constants/service";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "./hoc/SectionWrapper";

type ServiceCardProps = {
	title: string;
	icon: string;
	index: number;
};

const ServiceCard = ({ title, icon, index }: ServiceCardProps) => {
	return (
		<Tilt className="xs:w-[250px] w-full" options={{ max: 45, scale: 1, speed: 450 }}>
			<motion.div
				variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
				className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
			>
				<div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col items-center justify-evenly">
					<img src={icon} alt={title} className="w-16 h-16 object-contain" />
					<h3 className="text-white-100 text-[20px] text-center font-semibold">{title}</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className="section-sub-text">Introduction</p>
				<h2 className="section-head-text">Overview.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
			>
				Highly skilled full-stack developer proficient in ReactJS/NextJS, Springboot, Golang, and mobile app
				development using Flutter and React Native. Experienced in deploying applications to AWS and Azure using
				Docker, and adept at building static sites, client portals, and RESTful APIs. Strong background in both
				frontend and backend development, capable of creating functional, reusable components and integrating
				complex systems.
			</motion.p>

			<div className="mt-20 flex flex-wrap gap-10 justify-center">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");
