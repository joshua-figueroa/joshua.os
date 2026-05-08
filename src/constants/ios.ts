import revdashIcon from "../assets/projects/revdash.png";
import githubLogo from "../assets/github-white.svg";
import linkedinLogo from "../assets/linkedin-white.svg";

export type AppId =
	| "about"
	| "projects"
	| "tech"
	| "contact"
	| "safari"
	| "github"
	| "linkedin"
	| "revdash";

export type AppKind = "modal" | "external" | "route";

export type AppDef = {
	id: AppId;
	name: string;
	kind: AppKind;
	url?: string;
	gradient: string;
	emoji?: string;
	image?: string;
	logo?: string;
};

export const APPS: AppDef[] = [
	{
		id: "about",
		name: "About",
		kind: "modal",
		gradient: "linear-gradient(135deg, #2847A0 0%, #6583CC 100%)",
		emoji: "👋",
	},
	{
		id: "projects",
		name: "Projects",
		kind: "modal",
		gradient: "linear-gradient(135deg, #C08A5A 0%, #F2A663 100%)",
		emoji: "📁",
	},
	{
		id: "tech",
		name: "Tech Stack",
		kind: "modal",
		gradient: "linear-gradient(135deg, #6E37C2 0%, #B673FF 100%)",
		emoji: "🧰",
	},
	{
		id: "contact",
		name: "Contact",
		kind: "modal",
		gradient: "linear-gradient(135deg, #16C95C 0%, #5CE890 100%)",
		emoji: "💬",
	},
	{
		id: "safari",
		name: "Safari",
		kind: "external",
		url: "https://google.joshuafigueroa.dev",
		gradient: "linear-gradient(135deg, #FFFFFF 0%, #DFE8F2 100%)",
	},
	{
		id: "github",
		name: "GitHub",
		kind: "external",
		url: "https://github.com/joshua-figueroa",
		gradient: "linear-gradient(135deg, #1F2329 0%, #404652 100%)",
		logo: githubLogo,
	},
	{
		id: "linkedin",
		name: "LinkedIn",
		kind: "external",
		url: "https://www.linkedin.com/in/joshua-figueroa/",
		gradient: "linear-gradient(135deg, #0A66C2 0%, #4DA3F0 100%)",
		logo: linkedinLogo,
	},
	{
		id: "revdash",
		name: "RevDash",
		kind: "route",
		url: "/revdash",
		gradient: "linear-gradient(135deg, #2847A0 0%, #C08A5A 100%)",
		image: revdashIcon,
	},
];

export const DOCK_APPS: AppId[] = ["about", "projects", "contact", "safari"];
export const GRID_APPS: AppId[] = ["tech", "github", "linkedin", "revdash"];

export const getApp = (id: AppId): AppDef => {
	const app = APPS.find((a) => a.id === id);
	if (!app) throw new Error(`Unknown app: ${id}`);
	return app;
};
