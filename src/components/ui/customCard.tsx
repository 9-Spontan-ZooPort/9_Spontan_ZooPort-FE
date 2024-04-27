"use client";

export default function AnimalList() {
	const listHewan = [
		{
			image: "/Hewan(1).svg",
			title: "Burung Hantu",
			subTitle: "Eunectes murinus",
		},
		{
			image: "/Hewan(8).svg",
			title: "Harimau Putih",
			subTitle: "Panthera tigris",
		},
		{
			image: "/Hewan(7).svg",
			title: "Beruang",
			subTitle: "Paradisaeidae apoda",
		},
		{
			image: "/Hewan(4).svg",
			title: "Monyet",
			subTitle: "Elephas maximus",
		},
		{
			image: "/Hewan(5).svg",
			title: "Kuda Nil",
			subTitle: "Varanus komodoensis",
		},
		{
			image: "/Hewan(6).svg",
			title: "Kancil",
			subTitle: "Conolophus subcristatus",
		},
		{
			image: "/Hewan(2).svg",
			title: "Ular",
			subTitle: "Serpentes ",
		},
		{
			image: "/Hewan(3).svg",
			title: "Serigala",
			subTitle: "Canis lupus",
		},
	];

	return (
		<div className="grid grid-cols-2">
			{listHewan.map((d, index) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
				<div key={index} className="text-blue-50">
					<div className="border w-[150px] h-[172px] p-2 bg-accent shadow gap-2 rounded-[10px] mb-2">
						<img src={d.image} alt="profile" className="" />
						<div className="text-p3 text-stone-900 font-semibold">
							{d.title}
						</div>
						<div className="text-c3 text-stone-900 font-semibold">
							{d.subTitle}
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
