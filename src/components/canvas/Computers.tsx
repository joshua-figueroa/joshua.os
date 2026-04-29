import { Suspense, useEffect, useState } from "react";

import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import CanvasLoader from "../Loader";
import { Color } from "three";

type ComputersProps = {
	isMobile: boolean;
};

const Computers = ({ isMobile }: ComputersProps) => {
	// const { scene } = useGLTF("./mac/studio_setup.gltf");
	const { scene } = useGLTF("./desktop_pc/scene.gltf");

	return (
		<mesh>
			<hemisphereLight intensity={0.15} groundColor="black" />
			<spotLight
				position={[-3, 5, 1]}
				angle={1}
				penumbra={1}
				intensity={1}
				shadow-mapSize={1024}
				decay={-1}
				castShadow
			/>
			<pointLight intensity={1} />
			<ambientLight intensity={2} color={new Color(0xC08A5A)} />
			<primitive
				object={scene}
				scale={isMobile ? 0.7 : 0.75}
				position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.2]}
				rotation={[0, -0.25, -0.12]}
			/>
		</mesh>
	);
};

const ComputersCanvas = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 500px)");
		setIsMobile(mediaQuery.matches);

		const handleMediaQueryChange = (event: MediaQueryListEvent) => {
			setIsMobile(event.matches);
		};

		mediaQuery.addEventListener("change", handleMediaQueryChange);

		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
		};
	}, []);

	return (
		<Canvas
			frameloop="demand"
			camera={{ position: [20, 3, 5], fov: 25 }}
			dpr={[1, 2]}
			gl={{ preserveDrawingBuffer: true }}
			shadows
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
				<Computers isMobile={isMobile} />
			</Suspense>
			<Preload all />
		</Canvas>
	);
};

export default ComputersCanvas;
