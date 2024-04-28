import { Button } from "@/components/ui/button";
import CustomCard from "@/components/ui/customCard";
import { goDashboard } from "@/lib/actions";
import { listHewan } from "@/lib/data";
import type { Species } from "@/lib/types";
import { getSpecies } from "@/services/species";
import { CornerUpLeft } from "lucide-react";
import { Plus } from "lucide-react";
import Link from "next/link";

export default async function AnimalList() {
	let species: Species[] = await getSpecies();
	species = species.concat(listHewan);

	return (
		<div className="w-full flex bg-primary flex-col h-full items-start">
			{/* <div className="w-full h-[191px] bg-primary rounded-b-[60px] z-0" /> */}
			<div className="h-full z-2 px-9 pb-5 pt-14">
				<div className="w-full h-full flex flex-col gap-4 ">
					<div className="flex flex-row  items-center justify-center">
						<Button
							size="icon"
							className="w-8 bg-transparent hover:bg-transparent justify-center items-center p-0 m-0"
						>
							<Link href="/dashboard">
								<CornerUpLeft color="#d0e6b2" className="cursor-pointer" />
							</Link>
						</Button>
						<img
							src="/LogoZooPort2.svg"
							alt="logo"
							className="justify-center m-auto"
						/>
					</div>
					<div className="flex flex-col h-full gap-2">
						<h1 className="text-accent text-h7 font-semibold">
							Animal List KBS
						</h1>
						<p className="text-p3 text-accent">
							Masukkan satwa baru dan terupdate seputar KBS!
						</p>
						<div className="flex flex-row justify-end">
							<Button className="bg-accent w-fit">
								<Link href="/dashboard/animal-list/create">
									<p className="text-white">Tambah Satwa</p>
								</Link>
							</Button>
						</div>

						<div className="flex flex-row flex-wrap gap-x-2 justify-between">
							{species.map((s): React.ReactNode => {
								return <CustomCard key={s.id} title={s.name} image={s.photo} />;
							})}
							B
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
