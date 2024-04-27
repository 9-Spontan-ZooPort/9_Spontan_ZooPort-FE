"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { goDashboard } from "@/lib/actions";
import type { Animal } from "@/lib/types";
import { cn } from "@/lib/utils";
import { createAnimal } from "@/services/animal";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon, CornerUpLeft } from "lucide-react";
import { CalendarDays } from "lucide-react";
import { CheckCircleIcon } from "lucide-react";
import Link from "next/link";
import { type Dispatch, type SetStateAction, useState } from "react";
import { type UseFormReturn, useForm } from "react-hook-form";
import { z } from "zod";

type StepProp = {
	index: number;
	title: string;
	description: string;
};

const steps: StepProp[] = [
	{
		index: 1,
		title: "Tambahkan Jenis Satwa!",
		description: "Lengkapi nama dan jenis satwa yang akan didaftarkan",
	},
	{
		index: 2,
		title: "Masukkan Detail Satwa!",
		description: "Lengkapi detail jenis satwa yang akan didaftarkan",
	},
];

const CreateSchema = z.object({
	nama: z.string().min(1, "Nama hewan tidak boleh kosong"),
	asal: z.string().min(1, "Asal hewan tidak boleh kosong"),
	nama_panggilan: z.string().min(1, "Nama panggilan hewan tidak boleh kosong"),
	tanggal_lahir: z
		.date()
		.max(new Date(), "Tanggal lahir tidak boleh lebih dari hari ini"),
	jenis_kelamin: z.enum(["jantan", "betina"]),
	habitat: z.string().min(1, "Habitat hewan tidak boleh kosong"),
	tanggal_masuk: z
		.date()
		.max(new Date(), "Tanggal masuk tidak boleh lebih dari hari ini"),
	status_konservasi: z
		.string()
		.min(1, "Status konservasi hewan tidak boleh kosong"),
	deskripsi: z.string().min(1, "Deskripsi hewan tidak boleh kosong"),
	foto: z.string().min(1, "Foto hewan tidak boleh kosong"),
});

export default function FormAnimal() {
	const [index, setIndex] = useState(1);

	const form = useForm<z.infer<typeof CreateSchema>>({
		resolver: zodResolver(CreateSchema),
		defaultValues: {
			nama: "",
			asal: "",
			nama_panggilan: "",
			tanggal_lahir: new Date(Date.now()),
			jenis_kelamin: "jantan",
			habitat: "",
			tanggal_masuk: new Date(Date.now()),
			status_konservasi: "",
			deskripsi: "",
			foto: "",
		},
	});

	const submit = async (data: z.infer<typeof CreateSchema>) => {
		const animal: Animal = {
			speciesId: data.nama,
			nickname: data.nama_panggilan,
			birthdate: data.tanggal_lahir,
			gender: data.jenis_kelamin,
			weight: 1000,
			photo: data.foto,
			health: data.status_konservasi,
			description: data.deskripsi,
		};

		const response = await createAnimal(animal);

		if (response.error) {
			return form.setError("nama", {
				type: "manual",
				message: "Gagal menyimpan data",
			});
		}

		goDashboard();
	};

	function decrementIndex() {
		if (index > 1) setIndex(index - 1);
		else if (index === 1) goDashboard();
	}

	return (
		<div className="w-full flex flex-col h-full items-center">
			<div className="w-full h-[191px] bg-primary rounded-b-[60px] z-0" />
			<div className="w-[390px] h-full z-2 absolute px-9 pb-5 pt-14">
				<div className="w-full h-full flex flex-col gap-4 ">
					<div className="w-full flex flex-row items-center justify-center">
						<CornerUpLeft
							color="#d0e6b2"
							className="cursor-pointer"
							onClick={decrementIndex}
						/>
						<img
							src="/LogoZooPort2.svg"
							alt="logo"
							className="justify-center m-auto"
						/>
					</div>
					{index === 1 && (
						<Page
							step={steps[0]}
							index={index}
							setIndex={setIndex}
							form={form}
							submit={submit}
						/>
					)}
					{index === 2 && (
						<Page
							step={steps[1]}
							index={index}
							setIndex={setIndex}
							form={form}
							submit={submit}
						/>
					)}
				</div>
			</div>
		</div>
	);
}

function Page({
	step,
	index,
	setIndex,
	form,
	submit,
}: {
	step: StepProp;
	index: number;
	setIndex: Dispatch<SetStateAction<number>>;
	form: UseFormReturn<z.infer<typeof CreateSchema>>;
	submit: (data: z.infer<typeof CreateSchema>) => void;
}) {
	function incrementIndex() {
		if (index < 5) setIndex(index + 1);
	}

	return (
		<div className="w-full flex flex-col h-full gap-8 ">
			<div className="w-full flex flex-col flex-wrap">
				<h1 className="text-accent text-h7 font-semibold">{step.title}</h1>
				<p className="text-p3 text-accent">{step.description}</p>
			</div>

			<Form {...form}>
				<form onSubmit={form.handleSubmit(submit)}>
					{index === 1 && (
						<>
							<FormField
								control={form.control}
								name="nama"
								render={({ field }) => {
									return (
										<FormItem>
											<FormLabel className="text-p3 font-medium">
												Nama Hewan
											</FormLabel>
											<FormControl>
												<Input
													className="text-c2 font-regular w-full"
													placeholder="Masukkan nama"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									);
								}}
							/>
							<FormField
								control={form.control}
								name="asal"
								render={({ field }) => {
									return (
										<FormItem>
											<FormLabel className="text-p3 font-medium">
												Tempat Asal
											</FormLabel>
											<FormControl>
												<Input
													className="text-c2 font-regular w-full"
													placeholder="Masukkan asal"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									);
								}}
							/>
							<FormField
								control={form.control}
								name="nama_panggilan"
								render={({ field }) => {
									return (
										<FormItem>
											<FormLabel className="text-p3 font-medium">
												Nama Panggilan
											</FormLabel>
											<FormControl>
												<Input
													className="text-c2 font-regular w-full"
													placeholder="Masukkan nama panggilan hewan"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									);
								}}
							/>
							<FormField
								control={form.control}
								name="tanggal_lahir"
								render={({ field }) => {
									return (
										<FormItem>
											<FormLabel className="text-p3 font-medium">
												Tanggal Lahir
											</FormLabel>
											<Popover>
												<PopoverTrigger asChild>
													<FormControl>
														<Button
															variant={"outline"}
															className={cn(
																"text-c2 font-regular w-full",
																!field.value && "text-muted-foreground",
															)}
														>
															{field.value ? (
																format(field.value, "PPP")
															) : (
																<span>Masukkan tanggal</span>
															)}
															<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
														</Button>
													</FormControl>
												</PopoverTrigger>
												<PopoverContent className="w-auto p-0" align="start">
													<Calendar
														mode="single"
														selected={field.value}
														onSelect={field.onChange}
														disabled={(date) =>
															date > new Date() || date < new Date("1900-01-01")
														}
														initialFocus
													/>
												</PopoverContent>
											</Popover>
											<FormMessage />
										</FormItem>
									);
								}}
							/>
							<FormField
								control={form.control}
								name="jenis_kelamin"
								render={({ field }) => {
									return (
										<FormItem>
											<FormLabel className="text-p3 font-medium">
												Jenis Kelamin
											</FormLabel>
											<Select
												onValueChange={field.onChange}
												defaultValue={field.value}
											>
												<FormControl>
													<SelectTrigger className="text-c2 font-regular w-full">
														<SelectValue
															placeholder="Masukkan jenis kelamin"
															className="text-c2 font-regular w-full"
														/>
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													<SelectItem
														value="jantan"
														className="text-c2 font-regular w-full"
													>
														Jantan
													</SelectItem>
													<SelectItem
														value="betina"
														className="text-c2 font-regular w-full"
													>
														Betina
													</SelectItem>
												</SelectContent>
											</Select>
											<FormMessage />
										</FormItem>
									);
								}}
							/>
						</>
					)}
					{index === 2 && (
						<>
							<FormField
								control={form.control}
								name="habitat"
								render={({ field }) => {
									return (
										<FormItem>
											<FormLabel className="text-p3 font-medium">
												Habitat Asli
											</FormLabel>
											<FormControl>
												<Input
													className="text-c2 font-regular w-full"
													placeholder="Masukkan habitat"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									);
								}}
							/>
							<FormField
								control={form.control}
								name="tanggal_masuk"
								render={({ field }) => {
									return (
										<FormItem>
											<FormLabel className="text-p3 font-medium">
												Tanggal Masuk
											</FormLabel>
											<Popover>
												<PopoverTrigger asChild>
													<FormControl>
														<Button
															variant={"outline"}
															className={cn(
																"text-c2 font-regular w-full",
																!field.value && "text-muted-foreground",
															)}
														>
															{field.value ? (
																format(field.value, "PPP")
															) : (
																<span>Masukkan tanggal</span>
															)}
															<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
														</Button>
													</FormControl>
												</PopoverTrigger>
												<PopoverContent className="w-auto p-0" align="start">
													<Calendar
														mode="single"
														selected={field.value}
														onSelect={field.onChange}
														disabled={(date) =>
															date > new Date() || date < new Date("1900-01-01")
														}
														initialFocus
													/>
												</PopoverContent>
											</Popover>
											<FormMessage />
										</FormItem>
									);
								}}
							/>
							<FormField
								control={form.control}
								name="status_konservasi"
								render={({ field }) => {
									return (
										<FormItem>
											<FormLabel className="text-p3 font-medium">
												Status Konservasi
											</FormLabel>
											<FormControl>
												<Input
													className="text-c2 font-regular w-full"
													placeholder="Masukkan status konservasi"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									);
								}}
							/>
							<FormField
								control={form.control}
								name="deskripsi"
								render={({ field }) => {
									return (
										<FormItem>
											<FormLabel className="text-p3 font-medium">
												Deskripsi
											</FormLabel>
											<FormControl>
												<Textarea
													className="text-c2 font-regular w-full h-60"
													placeholder="Masukkan deskripsi"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									);
								}}
							/>
							<FormField
								control={form.control}
								name="foto"
								render={({ field }) => {
									return (
										<FormItem>
											<FormLabel className="text-p3 font-medium">
												Masukkan foto hewan
											</FormLabel>
											<FormControl>
												<Input
													className="text-c2 font-regular w-full"
													placeholder="Masukkan link foto"
													type="file"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									);
								}}
							/>
						</>
					)}

					{index === 1 && (
						<Button
							variant="outline"
							className="w-full mt-10 10 mb-12"
							onClick={incrementIndex}
						>
							<p className="text-c1 font-medium">Lanjut</p>
						</Button>
					)}

					{index === 2 && (
						<Dialog>
							<DialogTrigger className="w-full ">
								<Button
									variant="outline"
									className="w-full mt-10 mb-12"
									type="submit"
								>
									<p className="text-c1 font-medium">Simpan</p>
								</Button>
							</DialogTrigger>
							<DialogContent>
								<div className="flex flex-col gap-5 p-4 justify-center items-center">
									<CheckCircleIcon className="h-20 w-20" />
									<p className="text-h7 font-medium text-center">
										Terima kasih! Data telah disimpan!
									</p>
								</div>
								<Button variant="outline" className="w-full mt-">
									<Link href="/dashboard">
										<p className="text-c1 font-medium">Dashboard</p>
									</Link>
								</Button>
							</DialogContent>
						</Dialog>
					)}
				</form>
			</Form>
		</div>
	);
}
