import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			registerType: "autoUpdate",
			manifest: false,
			workbox: {
				// Precache all build output (JS, CSS, hashed images from src/assets)
				globPatterns: ["**/*.{js,css,html,png,jpg,jpeg,svg,webp,woff2}"],
				// Runtime cache for any image not covered by precache
				runtimeCaching: [
					{
						urlPattern: /\.(?:png|jpg|jpeg|svg|webp|gif|ico)$/i,
						handler: "CacheFirst",
						options: {
							cacheName: "images-cache",
							expiration: {
								maxEntries: 200,
								maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
							},
							cacheableResponse: {
								statuses: [0, 200],
							},
						},
					},
				],
			},
		}),
	],
});
