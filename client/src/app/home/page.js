"use client";

import Cart from "@/components/carts/page";
import ProductCarousel from "@/components/product-carousel";
import Products from "@/components/products/page";
import React from "react";
import { CiSearch, CiShoppingCart } from "react-icons/ci";

const Home = () => {
	return (
		<div>
			{/* Top menu bar ---------------------------------------*/}
			<div className="flex flex-col text-sm">
				<div className="flex gap-4 px-4 justify-end">
					<div className="hover:cursor-pointer hover:text-green-400">
						Download an app
					</div>
					<div className="hover:cursor-pointer hover:text-green-400">Login</div>
					<div className="hover:cursor-pointer hover:text-green-400">
						Sign up
					</div>
					<div className="hover:cursor-pointer hover:text-green-400">
						Help and Support
					</div>
				</div>

				<div className="flex gap-12 px-4 ">
					<img
						className="h-16 w-28 hover:cursor-pointer"
						src="/logo.png"
						alt="logo"
					/>
					<div className="flex gap-8 justify-center items-center">
						<div className="flex justify-center items-center">
							<input
								className="border-2 px-3 py-3 w-80 border-opacity-50 focus:border-opacity-100"
								placeholder="Search..."
								type="search"
								name="search"
							/>

							<label
								className=""
								htmlFor="search">
								<CiSearch className="h-12 w-12 -ml-12 hover:text-green-400" />
							</label>
						</div>
						<div>
							<CiShoppingCart className="h-12 w-12 hover:text-green-400" />
						</div>
					</div>
				</div>
			</div>

			<div>
				<ProductCarousel />
			</div>
			<div>
				<Products />
			</div>
		</div>
	);
};

export default Home;
