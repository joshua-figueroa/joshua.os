import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeOS from "./pages/HomeOS";
import RevDashHome from "./pages/RevDashHome";
import RevDashSupport from "./pages/RevDashSupport";
import RevDashPrivacy from "./pages/RevDashPrivacy";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomeOS />} />
				<Route path="/revdash" element={<RevDashHome />} />
				<Route path="/revdash/support" element={<RevDashSupport />} />
				<Route path="/revdash/privacy-policy" element={<RevDashPrivacy />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
