"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import * as React from "react";
import { LoginForm } from "./LoginForm";

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
