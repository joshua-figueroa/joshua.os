import { Link } from "react-router-dom";

const faqs = [
	{
		question: "How do I pair the OBD-II adapter?",
		answer:
			"Plug your OBD adapter into your vehicle's OBD-II port (usually located under the dashboard on the driver's side). Open RevDash and tap Connect — the app will scan for nearby BLE devices. Select your adapter from the list. If it doesn't appear, ensure your vehicle's ignition is on and Bluetooth is enabled on your iPhone.",
	},
	{
		question: "Which vehicles are supported?",
		answer:
			"RevDash works with any vehicle that has a standard OBD-II port, which covers most cars and light trucks manufactured from 1996 onwards. Some hybrid and electric vehicles may have limited PID support depending on the manufacturer. If a particular sensor isn't available, the corresponding gauge will show as unavailable.",
	},
	{
		question: "Why isn't my Bluetooth connecting?",
		answer:
			"First, make sure the adapter is fully seated in the OBD-II port and the ignition is on. Go to iPhone Settings → Bluetooth and check that Bluetooth is enabled. If the adapter has previously been paired to another device, remove it from that device's Bluetooth settings first. You can also try force-quitting RevDash and reopening it to reset the BLE scan.",
	},
	{
		question: "My trip data isn't recording — what should I check?",
		answer:
			"Trip logging begins automatically once a live connection to the adapter is established and the vehicle is moving. Ensure Location Services are granted for RevDash (Settings → Privacy & Security → Location Services → RevDash → While Using). Also confirm the adapter is sending engine data — a yellow or green status indicator in the app confirms an active connection.",
	},
];

const RevDashSupport = () => {
	return (
		<div className="min-h-screen bg-primary text-white-100">
			<div className="max-w-3xl mx-auto px-6 pt-16 pb-24 space-y-16">
				<header>
					<Link to="/revdash" className="text-secondary text-sm hover:text-white-100 transition-colors">
						← RevDash
					</Link>
					<h1 className="text-3xl font-bold tracking-tight text-white-100 mt-6">Support</h1>
					<p className="mt-2 text-secondary">Frequently asked questions and contact information.</p>
				</header>

				<section>
					<h2 className="text-white-100 text-xl font-semibold mb-8 border-b border-border-subtle pb-4">
						Frequently Asked Questions
					</h2>
					<div className="space-y-8">
						{faqs.map((faq) => (
							<div key={faq.question}>
								<h3 className="text-white-100 font-semibold text-[17px] mb-2">{faq.question}</h3>
								<p className="text-secondary text-[15px] leading-relaxed">{faq.answer}</p>
							</div>
						))}
					</div>
				</section>

				<section>
					<h2 className="text-white-100 text-xl font-semibold mb-4 border-b border-border-subtle pb-4">
						Contact
					</h2>
					<p className="text-secondary text-[15px] leading-relaxed">
						Have a question not covered above? Send an email and I'll get back to you as soon as possible.
					</p>
					<a
						href="mailto:joshuavillartafigueroa@gmail.com"
						className="inline-block mt-4 bg-tertiary text-white-100 font-medium px-6 py-3 rounded-xl hover:opacity-80 transition-opacity"
					>
						joshuavillartafigueroa@gmail.com
					</a>
				</section>
			</div>
		</div>
	);
};

export default RevDashSupport;
