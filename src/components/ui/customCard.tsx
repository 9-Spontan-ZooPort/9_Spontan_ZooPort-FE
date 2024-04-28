"use client";

import Image from "next/image";

export default function CustomCard({
	image = "/dummy_animal.png",
	title,
	onClick,
}: {
	image?: string;
	title: string;
	onClick?: () => void;
}) {
	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<div className="text-blue-50 hover:cursor-pointer" onClick={onClick}>
			<div className="border w-[150px] h-[172px] p-2 bg-accent shadow gap-2 rounded-[10px] mb-2">
				<Image src={image} alt="Animal" width={134} height={113} />
				<div className="text-p3 text-stone-900 font-semibold">{title}</div>
			</div>
		</div>
	);
}
