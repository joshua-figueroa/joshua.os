import { amazon, buff_preview, ernests, google, inkognito_preview, maze_runner, revdash_preview } from "../assets";
import { Project } from "../models/project";

export const projects: Project[] = [
	{
		name: "Inkognito",
		description:
			"A macOS app that gives any USB or network printer an AirPrint identity, letting iPhones and iPads on the same network print to it wirelessly — no server, no driver, no fuss.",
		tags: [
			{
				name: "swift",
				color: "orange-text-gradient",
			},
			{
				name: "macos",
				color: "blue-text-gradient",
			},
		],
		image: inkognito_preview,
		published_link: "/inkognito",
		source_code_link: "https://github.com/joshua-figueroa/Inkognito",
	},
	{
		name: "Buff",
		description:
			"A tiny macOS menu bar utility that blocks all keyboard and trackpad input on a timer so you can clean your screen and keys without triggering a single thing. Auto-releases when the countdown hits zero.",
		tags: [
			{
				name: "swift",
				color: "orange-text-gradient",
			},
			{
				name: "macos",
				color: "blue-text-gradient",
			},
		],
		image: buff_preview,
		published_link: "/buff",
		source_code_link: "https://github.com/joshua-figueroa/Buff",
	},
	{
		name: "Amazon Clone",
		description:
			"A fully functional Amazon Clone E-commerce web application that replicates the core functionalities of the Amazon website. Allows users to browse, search, and purchase a variety of products, providing a seamless and secure shopping experience similar to Amazon.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "firebase",
				color: "orange-text-gradient",
			},
			{
				name: "stripe",
				color: "violet-text-gradient",
			},
		],
		image: amazon,
		source_code_link: "https://github.com/joshua-figueroa/amazon-clone",
	},
	{
		name: "Google Clone",
		description:
			"Replicates the core functionalities of the Google search engine, providing users with a streamlined and familiar search experience. Also fetches information directly from Wikipedia whenever possible.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "firebase",
				color: "orange-text-gradient",
			},
			{
				name: "materialui",
				color: "blue-text-gradient",
			},
		],
		image: google,
		source_code_link: "https://github.com/joshua-figueroa/google-clone",
		published_link: "https://google.joshuafigueroa.dev",
	},
	{
		name: "Maze Runner",
		description:
			"Web-based multiplayer game that allows players to navigate through complex mazes, providing an engaging and competitive experience for friends and users alike.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "scss",
				color: "pink-text-gradient",
			},
			{
				name: "springboot",
				color: "green-text-gradient",
			},
		],
		image: maze_runner,
		published_link: "https://maze-runner.joshuafigueroa.dev",
		source_code_link: "https://github.com/joshua-figueroa/maze-runner",
	},
	{
		name: "Ernest's Place",
		description:
			"Web-based platform that allows users to explore, and book their stay at Ernest Place Boracay, providing a convenient and informative solution for planning their visit to this premium accommodation.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "tailwindcss",
				color: "pink-text-gradient",
			},
		],
		image: ernests,
		published_link: "https://ernestplaceboracay.com",
	},
	{
		name: "RevDash",
		description:
			"A personal iOS driving dashboard app that connects to an OBD adapter to display real-time vehicle data and log trips.",
		tags: [
			{
				name: "swiftui",
				color: "orange-text-gradient",
			},
			{
				name: "uikit",
				color: "green-text-gradient",
			},
			{
				name: "bluetooth",
				color: "blue-text-gradient",
			},
		],
		image: revdash_preview,
		source_code_link: "https://github.com/joshua-figueroa/RevDash",
		published_link: "/revdash",
	},
];
