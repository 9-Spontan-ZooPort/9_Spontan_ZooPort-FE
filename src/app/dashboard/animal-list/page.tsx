import CustomCard from "@/components/ui/customCard";
import type { Species } from "@/lib/types";
import { getSpecies } from "@/services/species";
import { CornerUpLeft } from "lucide-react";
import { Plus } from "lucide-react";
import Link from "next/link";

export default async function AnimalList() {
	const species: Species[] = await getSpecies();

	return (
		<div className="w-full flex flex-col h-full items-start">
			<div className="w-full h-[191px] bg-primary rounded-b-[60px] z-0" />
			<div className="h-full z-2 absolute px-9 pb-5 pt-14">
				<div className="w-full h-full flex flex-col gap-4 ">
					<div className="flex flex-row  items-center justify-center">
						<CornerUpLeft color="#d0e6b2" className="cursor-pointer" />
						<img
							src="/LogoZooPort2.svg"
							alt="logo"
							className="justify-center m-auto"
						/>
					</div>
					<div className="flex flex-col h-full ">
						<h1 className="text-accent text-h7 font-semibold">
							Animal List KBS
						</h1>
						<p className="text-p3 text-accent mb-5">
							Masukkan satwa baru dan terupdate seputar KBS!
						</p>
						<div className="flex flex-row flex-wrap gap-x-2 justify-between">
							{species.map((s): React.ReactNode => {
								return <CustomCard key={s.id} title={s.name} />;
							})}
						</div>
						<Link
							href="/dashboard/animal-list/create"
							className="w-full h-full flex justify-end items-end sticky"
						>
							<div className="w-14 h-14 bg-primary border rounded-full shadow flex items-center justify-center">
								<Plus color="#d0e6b2" size="36px" />
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
