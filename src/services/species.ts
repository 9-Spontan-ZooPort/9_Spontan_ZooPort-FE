"use server";

import { getItem } from "@/lib/localStorage";

export async function getSpecies() {
	try {
		const response = await fetch(`${process.env.API_URL}/species`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
			},
			mode: "no-cors",
		});

		if (!response.ok) {
			console.log("Error: ", response.body);
			throw new Error("Internal Server Error");
		}

		const body = await response.json();
		return body.data;
	} catch (error) {
		const message = (error as Error).message;
		return { error: message };
	}
}
