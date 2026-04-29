/* eslint-disable react-refresh/only-export-components */
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import emailjs from "@emailjs/browser";
import { EarthCanvas } from "./canvas";
import SectionWrapper from "./hoc/SectionWrapper";

const Contact = () => {
	const formRef = useRef<HTMLFormElement>(null);
	const sectionRef = useRef<HTMLDivElement>(null);
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);
	const [showEarth, setShowEarth] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setShowEarth(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);

		if (sectionRef.current) observer.observe(sectionRef.current);
		return () => observer.disconnect();
	}, []);

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { target } = e;
		const { name, value } = target;

		setForm({
			...form,
			[name]: value,
		});
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (form.name && form.email && form.message) {
			setLoading(true);

			try {
				await emailjs.send(
					import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
					import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
					{
						from_name: form.name,
						to_name: "Joshua Figueroa",
						from_email: form.email,
						to_email: "admin@joshuafigueroa.dev",
						message: form.message,
					},
					import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
				);

				setLoading(false);
				alert("Thank you. I will get back to you as soon as possible.");

				setForm({
					name: "",
					email: "",
					message: "",
				});
			} catch (error) {
				setLoading(false);
				console.error(error);

				alert("Ahh, something went wrong. Please try again.");
			}
		}
	};

	return (
		<div ref={sectionRef} className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
			<motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] bg-tertiary p-8 rounded-2xl">
				<p className="section-sub-text">Get in touch</p>
				<h3 className="section-head-text">Contact.</h3>

				<form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Name</span>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="What's your good name?"
							className="bg-black-100 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your email</span>
						<input
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							placeholder="What's your web address?"
							className="bg-black-100 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Message</span>
						<textarea
							rows={7}
							name="message"
							value={form.message}
							onChange={handleChange}
							placeholder="What you want to say?"
							className="bg-black-100 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none"
						/>
					</label>

					<button
						type="submit"
						className="bg-black-100 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
					>
						{loading ? "Sending..." : "Send"}
					</button>
				</form>
			</motion.div>

			<motion.div
				variants={slideIn("right", "tween", 0.2, 1)}
				className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
			>
				{showEarth && <EarthCanvas />}
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, "contact");
