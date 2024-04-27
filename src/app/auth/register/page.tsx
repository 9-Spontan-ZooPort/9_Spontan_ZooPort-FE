"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	EyeIcon,
	EyeOff,
	LockKeyholeOpenIcon,
	MailIcon,
	UserRound,
} from "lucide-react";
import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function Register() {
	return (
		<div className="bg-neutral-200 w-full flex items-end justify-center">
			<div className="bg-neutral-100 w-full justify-center items-center flex flex-col px-9 py-14 rounded-t-[60px]">
				<Avatar>
					<AvatarImage src="https://github.com/shadcn.png" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
				<div className="pt-7 pb-9 flex flex-col justify-center items-center gap-2">
					<p className="text-h7 font-bold">Selamat Datang</p>
					<p className="text-c2 font-medium">
						Silahkan masukkan informasi Anda
					</p>
				</div>
				<RegisterForm />
			</div>
		</div>
	);
}

function RegisterForm() {
	const RegisterSchema = z.object({
		nama: z.string(),
		email: z.string().email(),
		password: z.string().min(6, "Password must be at least 8 characters"),
	});

	const form = useForm<z.infer<typeof RegisterSchema>>({
		resolver: zodResolver(RegisterSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	function submit(data: z.infer<typeof RegisterSchema>) {
		console.log(data);
	}

	const [showPassword, setShowPassword] = React.useState(false);

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(submit)}
				className="flex flex-col gap-4 w-full"
			>
				<FormField
					control={form.control}
					name="nama"
					render={({ field }) => {
						return (
							<FormItem>
								<FormLabel className="text-c1 font-medium">Nama</FormLabel>
								<FormControl>
									<Input
										className="text-c2 font-regular"
										placeholder="Masukkan nama anda"
										{...field}
										startIcon={UserRound}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						);
					}}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => {
						return (
							<FormItem>
								<FormLabel className="text-c1 font-medium">Email</FormLabel>
								<FormControl>
									<Input
										className="text-c2 font-regular"
										placeholder="Masukkan email"
										{...field}
										startIcon={MailIcon}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						);
					}}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => {
						return (
							<FormItem>
								<FormLabel className="text-c1 font-medium">Password</FormLabel>
								<FormControl>
									<Input
										className="text-c2 font-regular"
										placeholder="Masukkan password"
										type={showPassword ? "text" : "password"}
										{...field}
										startIcon={LockKeyholeOpenIcon}
										endIcon={[EyeIcon, EyeOff]}
										onEndIconClick={() => setShowPassword(!showPassword)}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						);
					}}
				/>

				<Button type="submit" className="w-full mt-8">
					<p className="text-c1 font-medium">Daftar</p>
				</Button>
			</form>
		</Form>
	);
}
