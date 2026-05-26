import { useEffect } from "react";

type PageMeta = {
	title: string;
	description: string;
	url: string;
	image?: string;
};

const DEFAULT_TITLE = "Joshua Figueroa | Portfolio";
const DEFAULT_DESC = "Hi! I'm Joshua. I develop cross-platform apps, user interfaces, and full-stack web applications.";
const DEFAULT_URL = "https://joshuafigueroa.dev";
const DEFAULT_IMAGE = "/thumbnail.png";

function setMeta(selector: string, attr: string, value: string) {
	const el = document.querySelector(selector);
	if (el) el.setAttribute(attr, value);
}

export function usePageMeta({ title, description, url, image = DEFAULT_IMAGE }: PageMeta) {
	useEffect(() => {
		document.title = title;
		setMeta('meta[name="title"]', "content", title);
		setMeta('meta[name="description"]', "content", description);
		setMeta('meta[property="og:title"]', "content", title);
		setMeta('meta[property="og:description"]', "content", description);
		setMeta('meta[property="og:url"]', "content", url);
		setMeta('meta[property="og:image"]', "content", image);
		setMeta('meta[property="twitter:title"]', "content", title);
		setMeta('meta[property="twitter:description"]', "content", description);
		setMeta('meta[property="twitter:url"]', "content", url);

		return () => {
			document.title = DEFAULT_TITLE;
			setMeta('meta[name="title"]', "content", DEFAULT_TITLE);
			setMeta('meta[name="description"]', "content", DEFAULT_DESC);
			setMeta('meta[property="og:title"]', "content", DEFAULT_TITLE);
			setMeta('meta[property="og:description"]', "content", DEFAULT_DESC);
			setMeta('meta[property="og:url"]', "content", DEFAULT_URL);
			setMeta('meta[property="og:image"]', "content", DEFAULT_IMAGE);
			setMeta('meta[property="twitter:title"]', "content", DEFAULT_TITLE);
			setMeta('meta[property="twitter:description"]', "content", DEFAULT_DESC);
			setMeta('meta[property="twitter:url"]', "content", DEFAULT_URL);
		};
	}, [title, description, url, image]);
}
