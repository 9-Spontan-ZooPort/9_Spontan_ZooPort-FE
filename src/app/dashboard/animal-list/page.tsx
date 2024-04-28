"use client";
import { CornerUpLeft } from "lucide-react";
import { Plus } from "lucide-react";
import Link from "next/link";
import FormAnimal from "./create/page";

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
		<div className="w-full flex items-start">
			<div className="w-[390px] h-[191px] bg-primary rounded-bl-[60px] rounded-br-[60px]">
				<div className="flex flex-row  justify-between">
					<CornerUpLeft
						color="#d0e6b2"
						className="cursor-pointer mt-12 ml-[35px]"
					/>
					<img
						src="/LogoZooPort2.svg"
						alt="logo"
						className="justify-center mr-40 mt-10"
					/>
				</div>
				<div className="ml-8 mt-5 mr-3">
					<h1 className="text-accent text-h7 font-semibold">Animal List KBS</h1>
					<p className="text-p3 text-accent mb-5">
						Masukkan satwa baru dan terupdate seputar KBS!
					</p>
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
					<Link
						href="/dashboard/animal-list/create"
						className="w-full flex justify-end -mt-56"
					>
						<div className="w-14 h-14 bg-primary border rounded-full shadow flex items-center justify-center">
							<Plus color="#d0e6b2" size="36px" />
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}
