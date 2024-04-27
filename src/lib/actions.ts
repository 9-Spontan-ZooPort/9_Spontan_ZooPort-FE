"use server";

import { redirect } from "next/navigation";

export async function goHome() {
	redirect("/");
}

export async function goLogin() {
	redirect("/auth/login");
}

export async function goRegister() {
	redirect("/auth/register");
}

export async function goDashboard() {
	redirect("/dashboard");
}
