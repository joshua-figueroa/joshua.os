import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import HomeOS from "./pages/HomeOS";
import BuffHome from "./pages/BuffHome";
import InkognitoHome from "./pages/InkognitoHome";
import TechStack from "./pages/TechStack";

const RevDashRedirect = () => {
	useEffect(() => {
		window.location.replace("https://revdashapp.com");
	}, []);

	return null;
};

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomeOS />} />
				<Route path="/revdash" element={<RevDashRedirect />} />
				<Route path="/revdash/*" element={<RevDashRedirect />} />
				<Route path="/buff" element={<BuffHome />} />
				<Route path="/inkognito" element={<InkognitoHome />} />
				<Route path="/tech-stack" element={<TechStack />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
