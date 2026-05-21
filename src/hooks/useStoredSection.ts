import { useState } from "react";

export const useStoredSection = (storageKey: string, validIds: string[], defaultId: string) => {
	const [id, setId] = useState<string>(() => {
		if (typeof window === "undefined") return defaultId;
		try {
			const stored = window.localStorage.getItem(storageKey);
			if (stored && validIds.includes(stored)) return stored;
		} catch {
			/* private mode / storage unavailable */
		}
		return defaultId;
	});

	const update = (next: string) => {
		setId(next);
		try {
			window.localStorage.setItem(storageKey, next);
		} catch {
			/* ignore */
		}
	};

	return [id, update] as const;
};
