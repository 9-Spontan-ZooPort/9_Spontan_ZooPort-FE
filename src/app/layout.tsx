import type { Metadata } from "next";
import { girrafe, poppins } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
	title: "ZooPort",
	description: "A website by Spontan Team for Hackathon Competition",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${poppins.className} ${poppins.variable} ${girrafe.variable}`}
			>
				{children}
			</body>
		</html>
	);
}
