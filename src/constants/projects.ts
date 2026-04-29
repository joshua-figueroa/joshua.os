import { amazon, ernests, google, homelink, maze_runner, revdash_preview } from "../assets";
import { Project } from "../models/project";

export const projects: Project[] = [
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
		published_link: "https://amazonclone.joshuafigueroa.dev/",
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
		published_link: "https://google-clone.joshuafigueroa.dev",
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
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "scss",
				color: "pink-text-gradient",
			},
		],
		image: ernests,
		published_link: "https://ernestplaceboracay.com",
	},
	{
		name: "Arduino HomeLink",
		description:
			"An innovative project that leverages Arduino and Bluetooth Low Energy (BLE) technology to create a seamless and efficient HomeLink system. This platform enables users to control and automate various home devices remotely, enhancing convenience and connectivity.",
		tags: [
			{
				name: "swiftui",
				color: "orange-text-gradient",
			},
			{
				name: "arduino",
				color: "blue-text-gradient",
			},
		],
		image: homelink,
		source_code_link: "https://github.com/joshua-figueroa/Arduino-BLE-HomeLink",
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
				name: "bluetooth",
				color: "blue-text-gradient",
			},
			{
				name: "obd-ii",
				color: "green-text-gradient",
			},
		],
		image: revdash_preview,
		source_code_link: "https://github.com/joshua-figueroa/RevDash",
		published_link: "/revdash",
	},
];
