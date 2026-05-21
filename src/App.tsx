import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeOS from "./pages/HomeOS";
import RevDashHome from "./pages/RevDashHome";
import RevDashSupport from "./pages/RevDashSupport";
import RevDashPrivacy from "./pages/RevDashPrivacy";
import BuffHome from "./pages/BuffHome";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomeOS />} />
				<Route path="/revdash" element={<RevDashHome />} />
				<Route path="/revdash/support" element={<RevDashSupport />} />
				<Route path="/revdash/privacy-policy" element={<RevDashPrivacy />} />
				<Route path="/buff" element={<BuffHome />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
