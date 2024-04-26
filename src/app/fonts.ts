import { Poppins } from "next/font/google";
import localFont from "next/font/local";

export const girrafe = localFont({
	src: [
		{ path: "../../public/giraffe/giraffe-regular.otf", weight: "400" },
		{ path: "../../public/giraffe/giraffe-bold.otf", weight: "700" },
	],
	variable: "--font-giraffe",
	display: "swap",
});

export const poppins = Poppins({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-poppins",
});
