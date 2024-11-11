"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import Image from "next/image";

export function LoginForm() {
	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => setShowPassword(!showPassword);

	return (
		<div className="min-h-screen flex items-center justify-center bg-green-50">
			<div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
				<h2 className="flex text-xl gap-8 justify-start items-center font-bold  text-green-700">
					<div>
						<Image
							src="/logo.png"
							height={100}
							width={100}
						/>
					</div>
					<div>Login Form</div>
				</h2>
				<form className="space-y-4">
					<div className="space-y-2">
						<Label
							htmlFor="email"
							className="text-green-700">
							Email
						</Label>
						<Input
							id="email"
							type="email"
							placeholder="Enter your email"
							className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
						/>
					</div>
					<div className="space-y-2">
						<Label
							htmlFor="password"
							className="text-green-700">
							Password
						</Label>
						<div className="relative">
							<Input
								id="password"
								type={showPassword ? "text" : "password"}
								placeholder="Enter your password"
								className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
							/>
							<button
								type="button"
								onClick={togglePasswordVisibility}
								className="absolute inset-y-0 right-0 pr-3 flex items-center text-green-700">
								{showPassword ? (
									<EyeOffIcon className="h-5 w-5" />
								) : (
									<EyeIcon className="h-5 w-5" />
								)}
							</button>
						</div>
					</div>
					<Button
						type="submit"
						className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
						Sign In
					</Button>
				</form>
				<div className="text-center">
					<a
						href="#"
						className="text-green-600 hover:underline">
						Forgot password?
					</a>
				</div>
			</div>
		</div>
	);
}
