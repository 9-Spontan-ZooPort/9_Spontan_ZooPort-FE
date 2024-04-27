"use server";

export async function getAnimals(token: string) {
	try {
		const response = await fetch(`${process.env.API_URL}/animals`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
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
