"use server";
export async function login(email: string, password: string) {
	try {
		const response = await fetch("http://localhost:8080/v1/auth/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email, password }),
			mode: "no-cors",
		});

		console.log(response);

		if (!response.ok) {
			console.log("Error: ", response.statusText);
			throw new Error("Invalid Credentials");
		}

		const data = await response.json();
		return data;
	} catch (error) {
		const message = (error as Error).message;
		return { error: message };
	}
}

export async function register(
	name: string,
	email: string,
	password: string,
	role: "admin" | "zookeeper",
) {
	try {
		const response = await fetch("http://localhost:8080/v1/auth/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Superadmin: "superadmin",
			},
			body: JSON.stringify({ name, email, password, role }),
			mode: "no-cors",
		});

		console.log(response);

		if (!response.ok) {
			console.log("Error: ", response.statusText);
			throw new Error("User already registered");
		}

		const data = await response.json();
		return data;
	} catch (error) {
		const message = (error as Error).message;
		return { error: message };
	}
}
