"use client";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import * as React from "react";

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	startIcon?: LucideIcon;
	endIcon?: LucideIcon[];
	onEndIconClick?: () => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, startIcon, endIcon, ...props }, ref) => {
		const StartIcon = startIcon;
		const [EndIcon, setEndIcon] = React.useState<LucideIcon | undefined>(
			endIcon ? endIcon[0] : endIcon,
		);

		const [showPassword, setShowPassword] = React.useState(false);

		const togglePasswordVisibility = () => {
			if (endIcon !== undefined) {
				if (EndIcon === endIcon[0]) setEndIcon(endIcon[1]);
				else setEndIcon(endIcon[0]);
			}
			setShowPassword((prevShowPassword) => !prevShowPassword);
		};

		return (
			<div className="w-full relative">
				{StartIcon && (
					<div className="absolute left-3 top-1/2 transform -translate-y-1/2">
						<StartIcon size={18} className="text-muted-foreground" />
					</div>
				)}
				<input
					type={showPassword ? "text" : type}
					className={cn(
						"flex h-10 w-full rounded-md border border-input bg-background py-2 px-4 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
						startIcon ? "pl-10" : "",
						endIcon ? "pr-8" : "",
						className,
					)}
					ref={ref}
					{...props}
				/>
				{EndIcon && (
					// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
					<div
						className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
						onClick={togglePasswordVisibility}
					>
						<EndIcon className="text-muted-foreground" size={18} />
					</div>
				)}
			</div>
		);
	},
);
Input.displayName = "Input";

export { Input };
