"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
import { EyeIcon, EyeOff, LockKeyholeOpenIcon, MailIcon } from "lucide-react";
import Link from "next/dist/client/link";
import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function Login() {
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
				<LoginForm />
			</div>
		</div>
	);
}

function LoginForm() {
	const LoginSchema = z.object({
		email: z.string().email(),
		password: z.string().min(6, "Password must be at least 8 characters"),
	});

	const form = useForm<z.infer<typeof LoginSchema>>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	function submit(data: z.infer<typeof LoginSchema>) {
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
				<div className="w-full flex flex-row justify-between">
					<div className="flex justify-center items-center space-x-2">
						<Checkbox id="ingatSaya" />
						<label
							htmlFor="ingatSaya"
							className="text-c2 font-regular leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						>
							Ingat saya
						</label>
					</div>
					<Link href="/">
						<p className="text-c2 font-semibold hover:underline">
							Lupa password?
						</p>
					</Link>
				</div>

				<Button type="submit" className="w-full mt-8">
					<p className="text-c1 font-medium">Mulai</p>
				</Button>
			</form>
		</Form>
	);
}
