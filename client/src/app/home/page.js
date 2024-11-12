"use client";

import ProductCarousel from "@/components/product-carousel";
import Products from "@/components/products/page";
import React from "react";

const Home = () => {
	return (
		<div>
			<div>Home</div>
			<div>
				<ProductCarousel />
			</div>
			<div>
				<Products />
			</div>
			<div></div>
		</div>
	);
};

export default Home;
