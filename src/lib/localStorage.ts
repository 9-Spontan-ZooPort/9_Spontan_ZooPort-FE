"use client";

import { decodeJwt } from "./jwt";
import type { User } from "./types";

export function setItem(key: string, value: string) {
	localStorage.setItem(key, value);
}

export const getItem = (key: string) => {
	if (typeof window !== "undefined" && window.localStorage) {
		if (key === "user") {
			const userJwt = decodeJwt(localStorage.getItem("token") || "");
			const userString = JSON.stringify(userJwt);
			const userJson = JSON.parse(userString);
			const user: User = {
				email: userJson.email,
				name: userJson.name,
				role: userJson.role,
			};
			return user;
		}
		return localStorage.getItem(key);
	}
};

export function removeItem(key: string) {
	localStorage.removeItem(key);
}

export function clear() {
	localStorage.clear();
}
