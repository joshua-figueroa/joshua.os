import { Link } from "react-router-dom";
import revdash from "../assets/projects/revdash.png";

const RevDashHome = () => {
	return (
		<div className="min-h-screen bg-primary text-white-100 flex flex-col">
			<div className="max-w-2xl mx-auto px-6 pt-20 pb-24 flex flex-col items-center text-center flex-1">
				<img src={revdash} alt="RevDash" className="w-28 h-28 rounded-[26px] shadow-lg mb-8" />
				<h1 className="text-4xl font-bold tracking-tight text-white-100">RevDash</h1>
				<p className="mt-3 text-secondary text-lg max-w-md">
					iOS driving dashboard. Real-time vehicle data via OBD adapter.
				</p>

				<div className="mt-12 w-full flex flex-col sm:flex-row gap-4 justify-center">
					<Link
						to="/revdash/support"
						className="flex-1 max-w-xs mx-auto sm:mx-0 bg-tertiary hover:opacity-80 transition-opacity text-white-100 font-semibold px-8 py-5 rounded-2xl text-center"
					>
						<span className="block text-xl mb-1">🛠</span>
						Support
					</Link>
					<Link
						to="/revdash/privacy-policy"
						className="flex-1 max-w-xs mx-auto sm:mx-0 bg-tertiary hover:opacity-80 transition-opacity text-white-100 font-semibold px-8 py-5 rounded-2xl text-center"
					>
						<span className="block text-xl mb-1">🔒</span>
						Privacy Policy
					</Link>
				</div>
			</div>

			<footer className="text-center pb-8">
				<a href="/" className="text-secondary text-sm hover:text-white-100 transition-colors">
					← Back to portfolio
				</a>
			</footer>
		</div>
	);
};

export default RevDashHome;
