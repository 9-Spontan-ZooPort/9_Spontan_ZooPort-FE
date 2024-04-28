"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import {
	ClipboardList,
	Facebook,
	FileCheck2,
	HomeIcon,
	Instagram,
	Menu,
	PawPrint,
	Search,
	Settings,
	Twitter,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
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
			<div className="w-[390px] h-[191px] bg-accent rounded-bl-[60px] rounded-br-[60px]">
				<div className="ml-8 mt-5 mr-3">
					<div className="w-full flex flex-row justify-between mt-10">
						<Sheet>
							<SheetTrigger asChild>
								<Button className="-ml-[17.5px]">
									<Menu />
								</Button>
							</SheetTrigger>
							<SheetContent side="left" className="pt-14 bg-accent">
								<SheetHeader>
									<div className="flex flex-row gap-4 justify-start items-center">
										<img src="/LogoZooPort3.svg" alt="CN" />
									</div>
								</SheetHeader>
								<div className="flex flex-col pt-10">
									<div className="flex flex-col gap-8">
										<div className="flex flex-row gap-4">
											<HomeIcon />
											<p className="text-h9 font-medium">Dashboard</p>
										</div>
										<Separator />
										<div className="flex flex-row gap-4">
											<PawPrint />
											<p className="text-h9 font-medium">Animal Check</p>
										</div>
										<div className="flex flex-row gap-4">
											<FileCheck2 />
											<p className="text-h9 font-medium">Animal List</p>
										</div>
										<div className="flex flex-row gap-4">
											<ClipboardList />
											<p className="text-h9 font-medium">My Report</p>
										</div>
										<Separator />
										<div className="flex flex-row gap-4">
											<Settings />
											<p className="text-h9 font-medium">Settings</p>
										</div>
									</div>
								</div>
								<SheetFooter className="h-max pt-32">
									<SheetClose asChild>
										<Button
											type="submit"
											className="mt-8 w-60 h-9 p-2 bg-lime-900 text-white text-center hover:bg-lime-700"
										>
											Log out
										</Button>
									</SheetClose>
								</SheetFooter>
							</SheetContent>
						</Sheet>
						<Search className="cursor-pointer mt-1 mr-5" />
					</div>

					<h1 className="text-stone-900 text-h7 font-semibold mt-6">
						Hi Natha Kusuma
					</h1>
					<p className="text-p3 text-stone-900 mb-5">Good Morning!</p>

					<Carousel className="w-full max-w-xs">
						<CarouselContent>
							{Array.from({ length: 5 }).map((_, index) => (
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								<CarouselItem key={index}>
									<div>
										<Card>
											<CardContent className="flex items-center justify-center p-6">
												<img
													src="/imageHome2 (2).svg"
													alt="img"
													className="w-full"
												/>
											</CardContent>
										</Card>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>

					<p className="text-stone-900 text-p2 font-semibold my-4">
						Categories
					</p>
					<div className="grid grid-cols-4">
						<Link
							href="/dashboard/animal-report"
							className="flex flex-col items-center cursor-pointer "
						>
							<PawPrint size="60px" />
							<p className="text-c2 font-medium">Animal Check</p>
						</Link>
						<Link
							href="/dashboard/animal-list"
							className="flex flex-col items-center ml-3 cursor-pointer"
						>
							<FileCheck2 size="60px" />
							<p className="text-c2 font-medium">Animal List</p>
						</Link>
						<Link
							href="/dashboard/report"
							className="flex flex-col items-center ml-3 cursor-pointer"
						>
							<ClipboardList size="60px" />
							<p className="text-c2 font-medium">My Report</p>
						</Link>
					</div>

					<p className="text-stone-900 text-p2 font-semibold my-4">
						Pengamanan dan Prosedur Darurat
					</p>
					<div className="w-80 h-[139px] px-[11px] py-2.5 bg-accent rounded-[10px] flex-row justify-start items-start gap-2 inline-flex">
						<img src="/imageHome.svg" alt="img" />
						<div className="flex flex-col">
							<p className="text-c2 font-semibold mb-2">
								Pelatihan Simulasi Darurat Secara Berkala untuk Pawang Harimau.
							</p>
							<p className="text-c3 font-reguler">
								Pegawai harus dilatih untuk menangani hewan dengan aman dan
								efektif dalam situasi darurat
							</p>
						</div>
					</div>
					<div className="flex flex-row justify-between my-4">
						<p className="text-stone-900 text-p2 font-semibold ">
							{" "}
							Pilih Hewan yang Diperiksa{" "}
						</p>
						<p className="text-c2 font-medium mr-6">See all</p>
					</div>

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
				</div>
				<footer className="bg-accent">
					<div className="ml-8 mt-5 mr-3">
						<SheetHeader>
							<div className="flex flex-row gap-4 justify-start items-center mb-2 mt-4">
								<img src="/LogoZooPort3.svg" alt="CN" />
							</div>
						</SheetHeader>
						<Separator className="mb-4" />
						<h2 className="text-c1 font-medium mb-2">
							PT. ZooPort Makmur Tbk.
						</h2>
						<p className="text-c2 font-reguler mb-2">
							2401 N. Lincoln Blvd., Room 206 Jakarta Pusat, 73105
						</p>
						<h1 className="text-c1 font-medium mb-2">Contact Us</h1>
						<div className="flex flex-row mb-5 gap-2">
							<Facebook />
							<Twitter />
							<Instagram />
						</div>
						<Separator className="mb-4" />
						<div className="flex flex-col jus">
							<h2 className="text-c1 font-medium mb-2">Join our newsletter.</h2>
							<p className="text-c2 font-reguler mb-2">Enter email address</p>
						</div>
					</div>
				</footer>
			</div>
		</div>
	);
}
