"use server";

import type { Animal } from "@/lib/types";

export async function getAnimals(token: string) {
	try {
		const response = await fetch(`${process.env.API_URL}/animals`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
			},
			mode: "no-cors",
		});

		console.log(response);

		if (!response.ok) {
			console.log("Error: ", response.body);
			throw new Error("Internal Server Error");
		}

		const data = await response.json();
		return data;
	} catch (error) {
		const message = (error as Error).message;
		return { error: message };
	}
}

export async function getAnimal(id: string) {
	try {
		const response = await fetch(`${process.env.API_URL}/animals/${id}`, {
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

		const data = await response.json();
		return data;
	} catch (error) {
		const message = (error as Error).message;
		return { error: message };
	}
}

export async function createAnimal(data: Animal) {
	try {
		const response = await fetch(`${process.env.API_URL}/animals`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
			},
			body: JSON.stringify(data),
			mode: "no-cors",
		});

		if (!response.ok) {
			console.log("Error: ", response.body);
			throw new Error("Internal Server Error");
		}

		const body = await response.json();
		return body;
	} catch (error) {
		const message = (error as Error).message;
		return { error: message };
	}
}
