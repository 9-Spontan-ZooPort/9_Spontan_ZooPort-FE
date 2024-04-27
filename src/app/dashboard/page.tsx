import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

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

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { goHome } from "@/lib/actions";
import { decodeJwt } from "@/lib/jwt";
import { getItem } from "@/lib/localStorage";
import type { Species, User } from "@/lib/types";
import { getSpecies } from "@/services/species";
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
import Image from "next/image";
import Link from "next/link";
import logout from "./logout";

export default async function Dashboard() {
	const species: Species[] = await getSpecies();

	return (
		<div className="flex flex-col gap-4 w-full px-9 py-14">
			<div className="w-full flex flex-row justify-between ">
				<Sheet>
					<SheetTrigger asChild>
						<Button className="-ml-[17.5px]">
							<Menu />
						</Button>
					</SheetTrigger>
					<SheetContent side="left" className="pt-14">
						<SheetHeader>
							<div className="flex flex-row gap-4 justify-start items-center">
								<Avatar className="h-10 w-10">
									<AvatarImage src="https://github.com/shadcn.png" />
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
								<p className="text-h5">Testing</p>
							</div>
						</SheetHeader>
						<div className="flex flex-col pt-10">
							<div className="flex flex-col gap-8">
								<Button
									variant="link"
									className="justify-start p-0 m-0 items-center"
								>
									<div className="flex flex-row gap-4">
										<HomeIcon />
										<Link href="/dashboard">
											<p className="text-h9 font-medium">Dashboard</p>
										</Link>
									</div>
								</Button>
								<Separator />
								<Button
									variant="link"
									className="justify-start p-0 m-0 items-center"
								>
									<div className="flex flex-row gap-4">
										<PawPrint />
										<Link href="/dashboard/animal-report">
											<p className="text-h9 font-medium">Animal Check</p>
										</Link>
									</div>
								</Button>
								<Button
									variant="link"
									className="justify-start p-0 m-0 items-center"
								>
									<div className="flex flex-row gap-4">
										<FileCheck2 />
										<Link href="/dashboard/animal-list">
											<p className="text-h9 font-medium">Animal List</p>
										</Link>
									</div>
								</Button>
								<Button
									variant="link"
									className="justify-start p-0 m-0 items-center"
								>
									<div className="flex flex-row gap-4">
										<ClipboardList />
										<Link href="/dashboard/report">
											<p className="text-h9 font-medium">My Reports</p>
										</Link>
									</div>
								</Button>
								<Separator />
								<Button
									variant="link"
									className="justify-start p-0 m-0 items-center"
								>
									<div className="flex flex-row gap-4">
										<Settings />
										<p className="text-h9 font-medium">Settings</p>
									</div>
								</Button>
							</div>
						</div>
						<SheetFooter className="h-max pt-16">
							<SheetClose asChild>
								<Button
									variant="link"
									className="justify-center p-0 m-0 items-center w-full"
									onClick={logout}
								>
									<p className="text-h9 font-medium">Logout</p>
								</Button>
							</SheetClose>
						</SheetFooter>
					</SheetContent>
				</Sheet>
				<Search className="cursor-pointer" />
			</div>

			<p className="text-h6 font-semibold">Welcome!</p>

			<Carousel className="w-full max-w-xs">
				<CarouselContent>
					{Array.from({ length: 5 }).map((_, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<CarouselItem key={index}>
							<Card className="border-0">
								<CardContent className="p-0 flex aspect-video items-center justify-center">
									<Image
										src="/dummy_banner.png"
										alt="Banner"
										width={320}
										height={180}
									/>
								</CardContent>
							</Card>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>

			<p className="text-p2 font-semibold">Categories</p>
			<div className="flex flex-row gap-4 justify-between">
				<Link href="/dashboard/animal-report">
					<div className="flex flex-col gap-2 justify-center items-center">
						<div className="p-2 bg-neutral-400 rounded-sm h-16 w-16 flex justify-center items-center">
							<PawPrint className="h-10 w-10" />
						</div>
						<p className="text-c2 font-medium">Animal Check</p>
					</div>
				</Link>
				<Link href="/dashboard/animal-list">
					<div className="flex flex-col gap-2 justify-center items-center">
						<div className="p-2 bg-neutral-400 rounded-sm h-16 w-16 flex justify-center items-center">
							<FileCheck2 className="h-10 w-10" />
						</div>
						<p className="text-c2 font-medium">Animal List</p>
					</div>
				</Link>
				<Link href="/dashboard/report">
					<div className="flex flex-col gap-2 justify-center items-center">
						<div className="p-2 bg-neutral-400 rounded-sm h-16 w-16 flex justify-center items-center">
							<ClipboardList className="h-10 w-10" />
						</div>
						<p className="text-c2 font-medium">Report</p>
					</div>
				</Link>
			</div>

			<p className="text-p2 font-semibold">Pengamanan dan Prosedur Darurat</p>
			<div className="flex flex-row gap-4 p-2 bg-neutral-300 rounded-md">
				<Image
					src="/dummy_poster.png"
					alt="Banner"
					width={135}
					height={119}
					// objectFit="fill"
				/>
				<div className="flex flex-col ">
					<p className="text-c2 font-semibold">
						Pelatihan Simulasi Darurat Secara Berkala untuk Pawang Harimau.
					</p>
					<p className="text-c3 font-reguler">
						Pegawai harus dilatih untuk menangani hewan dengan aman dan efektif
						dalam situasi darurat
					</p>
				</div>
			</div>

			<p className="text-p2 font-semibold">Pilih Hewan yang Diperiksa</p>
			<div className="flex flex-row flex-wrap gap-x-2 justify-between">
				{species.map((s): React.ReactNode => {
					return (
						<div
							key={s.id}
							className=" flex flex-col p-2 gap-2 bg-neutral-600 rounded-lg hover:cursor-pointer mb-4 shadow-md shadow-black/70"
						>
							<Image
								src="/dummy_animal.png"
								alt="Animal"
								width={134}
								height={113}
								// objectFit="contain"
							/>
							<p className="text-p3 font-semibold"> {s.name} </p>
						</div>
					);
				})}
			</div>

			<footer>
				<SheetHeader>
					<div className="flex flex-row gap-4 justify-start items-center mb-5">
						<Avatar className="h-10 w-10">
							<AvatarImage src="https://github.com/shadcn.png" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						<p className="text-h5">Testing</p>
					</div>
				</SheetHeader>
				<Separator className="mb-4" />
				<h2 className="text-c1 font-medium mb-2">PT. ZooPort Makmur Tbk.</h2>
				<p className="text-c2 font-reguler mb-2">
					2401 N. Lincoln Blvd., Room 206 <br />
					Jakarta Pusat, 73105
				</p>
				<h1 className="text-c1 font-medium mb-2">Contact Us</h1>
				<div className="flex flex-row mb-5 gap-2">
					<Facebook className="hover:cursor-pointer" />
					<Twitter className="hover:cursor-pointer" />
					<Instagram className="hover:cursor-pointer" />
				</div>
				<Separator className="mb-4" />
			</footer>
		</div>
	);
}
