"use client";
import { Input } from "@/components/ui/input";
import { CornerUpLeft } from "lucide-react";
import { CalendarDays } from "lucide-react";
import Link from "next/link";
import FormAnimalTwo from "../create2/page";

export default function FormAnimal() {
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

					<form className="mt-20">
						<h1 className="text-p3 font-medium text-stone-900 mb-1">
							Nama Hewan
						</h1>
						<Input
							className="font-regular text-stone-900 text-c2 rounded-[10px] border border-stone-900 w-80 h-10 mb-2"
							placeholder="Masukkan nama"
						/>
						<h1 className="text-p3 font-medium text-stone-900 mb-1">
							Tempat Asal
						</h1>
						<Input
							className="font-regular text-stone-900 text-c2 rounded-[10px] border border-stone-900 w-80 h-10 mb-2"
							placeholder="Masukkan nama"
						/>
						<h1 className="text-p3 font-medium text-stone-900 mb-1">
							Nama Panggilan
						</h1>
						<Input
							className="font-regular text-stone-900 text-c2 rounded-[10px] border border-stone-900 w-80 h-10 mb-2"
							placeholder="Masukkan nama panggilan hewan"
						/>
						<h1 className="text-p3 font-medium text-stone-900 mb-1">
							Tanggal Lahir
						</h1>
						<Input
							className="font-regular text-stone-900 text-c2 rounded-[10px] border border-stone-900 w-80 h-10 mb-2"
							placeholder="Masukkan tanggal"
						/>
						<h1 className="text-p3 font-medium text-stone-900 mb-1">
							Jenis Kelamin
						</h1>
						<Input
							className="font-regular text-stone-900 text-c2 rounded-[10px] border border-stone-900 w-80 h-10 mb-2"
							placeholder="Masukkan jenis kelamin"
						/>
					</form>

					<Link
						href="/dashboard/animal-list/create2"
						className="border w-80 h-8 p-2 bg-primary rounded-[10px] justify-center items-center gap-2 inline-flex text-white mt-20  hover:bg-lime-700 text-xs font-semibold"
					>
						{" "}
						Lanjut{" "}
					</Link>
				</div>
			</div>
		</div>
	);
}
