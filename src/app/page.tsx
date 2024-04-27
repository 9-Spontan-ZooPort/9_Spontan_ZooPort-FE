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

export default function Home() {
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
									className="w-full bg-slate-300 p-6 text-h9 font-medium"
								>
									Log out
								</Button>
							</SheetClose>
						</SheetFooter>
					</SheetContent>
				</Sheet>
				<Search className="cursor-pointer" />
			</div>

			<h1 className="text-h6 font-semibold ">Hi Natha</h1>
			<h2 className="text-h8">Good Morning</h2>

			<Carousel className="w-full max-w-xs">
				<CarouselContent>
					{Array.from({ length: 5 }).map((_, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<CarouselItem key={index}>
							<div>
								<Card>
									<CardContent className="flex aspect-video items-center justify-center p-6">
										<span className="text-4xl font-semibold">{index + 1}</span>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>

			<p className="text-p2 font-semibold">Categories</p>
			<div className="grid grid-cols-4">
				<div className="flex flex-col items-center cursor-pointer">
					<div className="box-content border-4 h-16 w-16 bg-blue-50 border-blue-50 mb-2">
						{" "}
					</div>
					<p className="text-c2 font-medium">Animal Check</p>
				</div>
				<div className="flex flex-col items-center ml-2 cursor-pointer">
					<div className="box-content border-4 h-16 w-16 bg-blue-50 border-blue-50 mb-2">
						{" "}
					</div>
					<p className="text-c2 font-medium">Animal List</p>
				</div>
				<div className="flex flex-col items-center ml-4 cursor-pointer">
					<div className="box-content border-4 h-16 w-16 bg-blue-50 border-blue-50 mb-2">
						{" "}
					</div>
					<p className="text-c2 font-medium">My Report</p>
				</div>
			</div>

			<p className="text-p2 font-semibold">Pengamanan dan Prosedur Darurat</p>
			<div className="w-80 h-[132px] px-[11px] py-2.5 bg-zinc-300 rounded-[10px] flex-col justify-start items-start gap-2 inline-flex">
				<div className="flex flex-row">
					<div className="w-56 h-[112px] px-[11px] bg-blue-50 mr-5 " />
					<div className="flex flex-col ">
						<p className="text-c2 font-semibold">
							Pelatihan Simulasi <br /> Darurat Secara Berkala <br />
							untuk Pawang Harimau.
						</p>
						<p className="text-c2 font-reguler">
							Pegawai harus dilatih untuk menangani hewan dengan <br /> aman dan
							efektif dalam situasi darurat
						</p>
					</div>
				</div>
			</div>

			<p className="text-p2 font-semibold">Satwa Penangkaran KBS</p>
			<div className="grid grid-cols-2">
				{Array.from({ length: 8 }).map((_, i) => (
					<div
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={i}
						className="h-fit w-[134px] flex flex-col p-2 gap-2 bg-neutral-600 rounded-lg hover:cursor-pointer mb-4"
					>
						<div className="h-28 w-full bg-neutral-400 rounded-md" />
						<div className="flex flex-col">
							<p className="text-p3 font-semibold"> Nama Hewan </p>
							<p className="text-c2 font-regular"> Nama Latin </p>
						</div>
					</div>
				))}
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
					2401 N. Lincoln Blvd., Room 206 Jakarta Pusat, 73105
				</p>
				<h1 className="text-c1 font-medium mb-2">Contact Us</h1>
				<div className="flex flex-row mb-5 gap-2">
					<Facebook />
					<Twitter />
					<Instagram />
				</div>
				<Separator className="mb-4" />
				<h2 className="text-c1 font-medium mb-2">Join our newsletter.</h2>
				<p className="text-c2 font-reguler mb-2">Enter email address</p>
			</footer>
		</div>
	);
}
