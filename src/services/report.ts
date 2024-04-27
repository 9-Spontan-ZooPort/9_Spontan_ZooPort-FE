"use server";

import type { Report } from "@/lib/types";

export async function createReport(data: Report) {
	try {
		const response = await fetch(`${process.env.API_URL}/reports`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
			},
			body: JSON.stringify(data),
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
