"use client";

import Image from "next/image";

export default function CustomCard({
	image = "/dummy_animal.png",
	title,
}: { image?: string; title: string }) {
	return (
		<div className="text-blue-50">
			<div className="border w-[150px] h-[172px] p-2 bg-accent shadow gap-2 rounded-[10px] mb-2">
				<Image src={image} alt="Animal" width={134} height={113} />
				<div className="text-p3 text-stone-900 font-semibold">{title}</div>
			</div>
		</div>
	);
}
