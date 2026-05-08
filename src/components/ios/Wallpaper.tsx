const Wallpaper = () => {
	return (
		<div className="absolute inset-0 overflow-hidden pointer-events-none">
			<div className="absolute inset-0 bg-gradient-to-br from-[#0A0D15] via-[#12161F] to-[#000000]" />
			<div
				className="orb"
				style={{
					top: "-10%",
					left: "-5%",
					width: "55vw",
					height: "55vw",
					background: "#2847A0",
					animation: "orb-float-1 30s ease-in-out infinite",
				}}
			/>
			<div
				className="orb"
				style={{
					bottom: "-15%",
					right: "-10%",
					width: "60vw",
					height: "60vw",
					background: "#C08A5A",
					animation: "orb-float-2 35s ease-in-out infinite",
				}}
			/>
			<div
				className="orb"
				style={{
					top: "30%",
					right: "20%",
					width: "35vw",
					height: "35vw",
					background: "#1E3682",
					opacity: 0.4,
					animation: "orb-float-3 40s ease-in-out infinite",
				}}
			/>
		</div>
	);
};

export default Wallpaper;
