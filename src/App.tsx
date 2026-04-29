import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Hero, Navbar, StarsCanvas, Tech, Works } from "./components";
import RevDash from "./pages/RevDash";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<div className="relative z-0 bg-primary">
							<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
								<Navbar />
								<Hero />
							</div>
							<About />
							<Works />
							<Tech />
							<div className="relative z-0">
								<Contact />
								<StarsCanvas />
							</div>
						</div>
					}
				/>
				<Route path="/revdash" element={<RevDash />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
