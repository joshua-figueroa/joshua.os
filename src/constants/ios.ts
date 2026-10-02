import revdashIcon from "../assets/projects/revdash.png";
import buffIcon from "../assets/projects/buff.png";
import inkognitoIcon from "../assets/projects/inkognito.png";
import contactsIcon from "../assets/contacts.webp";
import imessageIcon from "../assets/imessage.svg";
import filesIcon from "../assets/files.webp";
import finderIcon from "../assets/finder.webp";
import githubLogo from "../assets/github-white.svg";
import linkedinLogo from "../assets/linkedin-white.svg";
import safariIcon from "../assets/safari.webp";

export type AppId =
	| "about"
	| "projects"
	| "tech"
	| "contact"
	| "safari"
	| "github"
	| "linkedin"
	| "revdash"
	| "buff"
	| "inkognito";

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
		gradient: "linear-gradient(135deg, #FFFFFF 0%, #E8EDF2 100%)",
		image: contactsIcon,
	},
	{
		id: "projects",
		name: "Projects",
		kind: "modal",
		gradient: "linear-gradient(135deg, #FFFFFF 0%, #EEF0F4 100%)",
		image: filesIcon,
	},
	{
		id: "tech",
		name: "Tech Stack",
		kind: "route",
		url: "/tech-stack",
		gradient: "linear-gradient(135deg, #FFFFFF 0%, #EEF0F4 100%)",
		image: finderIcon,
	},
	{
		id: "contact",
		name: "Contact",
		kind: "modal",
		gradient: "linear-gradient(135deg, #29C354 0%, #1A9E3F 100%)",
		image: imessageIcon,
	},
	{
		id: "safari",
		name: "Safari",
		kind: "external",
		url: "https://google.joshuafigueroa.dev",
		gradient: "linear-gradient(135deg, #FFFFFF 0%, #DFE8F2 100%)",
		image: safariIcon,
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
		kind: "external",
		url: "https://revdashapp.com",
		gradient: "linear-gradient(135deg, #2847A0 0%, #C08A5A 100%)",
		image: revdashIcon,
	},
	{
		id: "buff",
		name: "Buff",
		kind: "route",
		url: "/buff",
		gradient: "linear-gradient(135deg, #FDE4CF 0%, #E07A5F 100%)",
		image: buffIcon,
	},
	{
		id: "inkognito",
		name: "Inkognito",
		kind: "route",
		url: "/inkognito",
		gradient: "linear-gradient(135deg, #1E1E2E 0%, #313244 100%)",
		image: inkognitoIcon,
	},
];

export const DOCK_APPS: AppId[] = ["about", "projects", "contact", "safari"];
export const GRID_APPS: AppId[] = ["tech", "github", "linkedin", "revdash", "buff", "inkognito"];

export const getApp = (id: AppId): AppDef => {
	const app = APPS.find((a) => a.id === id);
	if (!app) throw new Error(`Unknown app: ${id}`);
	return app;
};
