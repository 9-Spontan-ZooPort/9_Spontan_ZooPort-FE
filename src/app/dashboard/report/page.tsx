import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { listHewan } from "@/lib/data";
import type { Species } from "@/lib/types";
import { getSpecies } from "@/services/species";
import { CornerUpLeft } from "lucide-react";
import Link from "next/link";

export default async function Report() {
	let species: Species[] = await getSpecies();
	species = species.concat(listHewan);

	return (
		<div className="bg-neutral-200 w-full flex flex-col">
			<div className="px-9 pt-14 pb-5">
				<div className="flex flex-row  items-center justify-center">
					<Button
						size="icon"
						className="w-8 bg-transparent hover:bg-transparent justify-center items-center p-0 m-0"
					>
						<Link href="/dashboard">
							<CornerUpLeft color="#4F6041" className="cursor-pointer" />
						</Link>
					</Button>
					<img
						src="/LogoZooPort3.svg"
						alt="logo"
						className="justify-center m-auto"
					/>
				</div>
				<div className="flex flex-col pt-4">
					<p className="text-h7 font-semibold">My Report</p>
				</div>
			</div>
			<div className="bg-accent w-full rounded-t-[60px]">
				<div className="px-9 pt-14 pb-5 flex flex-col gap-2">
					{species.map((s): React.ReactNode => {
						return (
							<div
								key={s.id}
								className="border-2 border-primary p-4 rounded-md hover:cursor-pointer"
							>
								<div className="flex flex-row gap-2 items-center justify-start">
									<Avatar className="w-9 h-9">
										<AvatarImage src={s.photo} />
										<AvatarFallback>?</AvatarFallback>
									</Avatar>
									<div className="flex flex-col items-start justify-center">
										<p className="text-c1 font-semibold">{s.name}</p>
										<p className="text-c2 font-regular">
											Report date: 28/04/2024
										</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
