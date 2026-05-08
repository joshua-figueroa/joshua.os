import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { HiUser, HiArrowUp, HiCheckCircle, HiPhone, HiVideoCamera } from "react-icons/hi2";
import emailjs from "@emailjs/browser";

const TYPING_BUBBLE_DELAY = 600;

const ContactApp = () => {
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const [loading, setLoading] = useState(false);
	const [sent, setSent] = useState(false);
	const [showTyping, setShowTyping] = useState(true);
	const [showSecondBubble, setShowSecondBubble] = useState(false);
	const scrollRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const t1 = setTimeout(() => {
			setShowTyping(false);
			setShowSecondBubble(true);
		}, TYPING_BUBBLE_DELAY);
		return () => clearTimeout(t1);
	}, []);

	useEffect(() => {
		scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
	}, [form.name, form.email, form.message, sent, showSecondBubble]);

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setForm((f) => ({ ...f, [name]: value }));
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!form.name || !form.email || !form.message) return;
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
			setSent(true);
		} catch (err) {
			console.error(err);
			alert("Something went wrong. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	const canSend = form.name && form.email && form.message && !loading && !sent;

	return (
		<div className="h-full flex flex-col text-white">
			{/* Header — iMessage contact bar */}
			<div className="flex-shrink-0 flex flex-col items-center pt-2 pb-3 px-4 border-b border-border-subtle relative">
				<button
					type="button"
					className="absolute right-4 top-3 p-1 text-blue-400 opacity-60 hover:opacity-100"
					aria-label="FaceTime"
				>
					<HiVideoCamera size={22} />
				</button>
				<button
					type="button"
					className="absolute right-12 top-3 p-1 text-blue-400 opacity-60 hover:opacity-100"
					aria-label="Phone"
				>
					<HiPhone size={20} />
				</button>

				<div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet to-copper flex items-center justify-center mb-1">
					<HiUser className="text-white" size={26} />
				</div>
				<div className="text-[13px] font-semibold leading-tight flex items-center gap-1">
					Joshua Figueroa
					<svg width="10" height="10" viewBox="0 0 10 10" className="text-secondary">
						<path d="M3 2L7 5L3 8" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</div>
				<div className="flex items-center gap-1.5 text-[11px] text-secondary mt-0.5">
					<span className="w-1.5 h-1.5 rounded-full bg-green-400" />
					<span>Active now</span>
				</div>
			</div>

			{/* Chat area */}
			<div ref={scrollRef} className="flex-1 overflow-y-auto no-scrollbar px-4 py-3 space-y-1.5">
				<div className="text-center text-[11px] text-secondary py-1.5">
					<span className="font-semibold text-white/55">iMessage</span> · Today
				</div>

				{showTyping && (
					<div className="flex justify-start">
						<div className="bg-[#26262A] text-white rounded-[18px] rounded-bl-[6px] px-3.5 py-2.5 flex gap-1">
							<span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse" />
							<span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: "0.15s" }} />
							<span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: "0.3s" }} />
						</div>
					</div>
				)}

				{!showTyping && (
					<div className="flex justify-start">
						<div className="bg-[#26262A] text-white rounded-[18px] rounded-bl-[6px] px-3.5 py-2 max-w-[78%] text-[15px]">
							Hey 👋 thanks for stopping by.
						</div>
					</div>
				)}

				{showSecondBubble && (
					<div className="flex justify-start">
						<div className="bg-[#26262A] text-white rounded-[18px] rounded-bl-[6px] px-3.5 py-2 max-w-[78%] text-[15px]">
							Drop a message below — I'll get back to you soon.
						</div>
					</div>
				)}

				{(form.name || form.email || form.message) && (
					<>
						<div className="flex justify-end">
							<div className="bg-[#0B84FF] text-white rounded-[18px] rounded-br-[6px] px-3.5 py-2 max-w-[78%] text-[15px] whitespace-pre-wrap">
								{[
									form.name && `Hi, I'm ${form.name}.`,
									form.email,
									form.message,
								]
									.filter(Boolean)
									.join("\n")}
							</div>
						</div>
						{sent && (
							<div className="flex justify-end items-center gap-1 pr-1 pt-0.5">
								<HiCheckCircle className="text-blue-400" size={14} />
								<span className="text-[11px] text-secondary">Delivered</span>
							</div>
						)}
					</>
				)}
			</div>

			{/* Compose bar */}
			<form
				onSubmit={handleSubmit}
				className="flex-shrink-0 border-t border-border-subtle bg-primary/80 backdrop-blur-md px-3 py-2 space-y-2"
			>
				{!sent && (
					<>
						<div className="grid grid-cols-2 gap-2">
							<input
								type="text"
								name="name"
								value={form.name}
								onChange={handleChange}
								placeholder="Name"
								required
								className="bg-tertiary/60 border border-border-subtle rounded-full px-3.5 py-2 text-[13px] text-white placeholder:text-secondary outline-none focus:border-blue-500/60 transition-colors"
							/>
							<input
								type="email"
								name="email"
								value={form.email}
								onChange={handleChange}
								placeholder="Email"
								required
								className="bg-tertiary/60 border border-border-subtle rounded-full px-3.5 py-2 text-[13px] text-white placeholder:text-secondary outline-none focus:border-blue-500/60 transition-colors"
							/>
						</div>

						<div className="flex items-end gap-2">
							<div className="flex-1 bg-transparent border border-border-default rounded-[20px] px-3.5 py-2">
								<textarea
									name="message"
									value={form.message}
									onChange={handleChange}
									placeholder="iMessage"
									rows={1}
									className="w-full bg-transparent text-[15px] text-white placeholder:text-secondary outline-none resize-none max-h-32"
									onInput={(e) => {
										const t = e.currentTarget;
										t.style.height = "auto";
										t.style.height = Math.min(t.scrollHeight, 128) + "px";
									}}
								/>
							</div>
							<button
								type="submit"
								disabled={!canSend}
								className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
									canSend
										? "bg-[#0B84FF] hover:bg-blue-500"
										: "bg-tertiary opacity-40 cursor-not-allowed"
								}`}
								aria-label="Send"
							>
								<HiArrowUp className="text-white" size={18} />
							</button>
						</div>
					</>
				)}

				{sent && (
					<div className="text-center text-[12px] text-secondary py-1">
						Message sent. I'll be in touch.
					</div>
				)}
			</form>
		</div>
	);
};

export default ContactApp;
