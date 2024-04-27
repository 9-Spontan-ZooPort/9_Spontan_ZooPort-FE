"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import * as React from "react";
import { RegisterForm } from "./RegisterForm";

export default function Register() {
	return (
		<div className="bg-neutral-200 w-full flex items-end justify-center bg-[url('/bgImage.svg')]">
			<div className="bg-accent w-full justify-center items-center mt-48 flex flex-col px-9 rounded-t-[60px]">
				<img src="/LogoZooPort.svg" alt="CN" className="mt-3" />
				<div className="pt-2 pb-2 flex flex-col justify-center items-center gap-2">
					<p className="text-stone-900 text-h7 font-bold">Selamat Datang</p>
					<p className="text-stone-900 text-c2 font-medium">
						Silahkan masukkan informasi Anda
					</p>
				</div>
				<RegisterForm />
			</div>
		</div>
	);
}
