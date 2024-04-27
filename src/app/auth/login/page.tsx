"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import * as React from "react";
import { LoginForm } from "./LoginForm";

export default function Login() {
	return (
		<div className="w-full flex items-end justify-center bg-[url('/bgImage.svg')] bg-">
			<div className="bg-accent w-full justify-center items-center flex flex-col mt-48 px-9 py-5 rounded-t-[60px]">
				<img src="/LogoZooPort.svg" alt="CN" />
				<div className="pt-7 pb-9 flex flex-col justify-center items-center gap-2">
					<p className="text-h7 font-bold text-stone-900">Selamat Datang</p>
					<p className="text-c2 font-medium text-stone-900">
						Silahkan masukkan informasi Anda
					</p>
				</div>
				<LoginForm />
			</div>
		</div>
	);
}
