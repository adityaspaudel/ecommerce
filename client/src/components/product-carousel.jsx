import React, { useState } from "react";

const products = [
	{
		id: 1,
		name: "Product 1",
		description: "Description of Product 1",
		price: "$20.00",
		image: "https://fakestoreapi.com/img/81fPKd-2AYL.AC_SL1500.jpg",
		// Replace with product image URLs
	},
	{
		id: 2,
		name: "Product 2",
		description: "Description of Product 2",
		price: "$35.00",
		image: "https://fakestoreapi.com/img/71li-ujtlUL.AC_UX679.jpg",
	},
	{
		id: 3,
		name: "Product 3",
		description: "Description of Product 3",
		price: "$50.00",
		image: "https://fakestoreapi.com/img/71z3kpMAYsL.AC_UY879.jpg",
	},
];

export default function ProductCarousel() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrev = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? products.length - 1 : prevIndex - 1
		);
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === products.length - 1 ? 0 : prevIndex + 1
		);
	};

	const currentProduct = products[currentIndex];

	return (
		<div className="flex flex-col items-center justify-center bg-black p-6">
			<h2 className="text-green-500 text-xl mb-4">Our Products</h2>
			<div className="bg-white text-black w-full max-w-md rounded-lg shadow-lg overflow-hidden">
				<img
					src={currentProduct.image}
					alt={currentProduct.name}
					className="w-full h-64 object-cover"
				/>
				<div className="p-4">
					<h3 className="text-green-500 text-lg font-semibold">
						{currentProduct.name}
					</h3>
					<p className="text-sm">{currentProduct.description}</p>
					<p className="text-green-500 font-bold mt-2">
						{currentProduct.price}
					</p>
				</div>
			</div>
			<div className="flex space-x-4 mt-4">
				<button
					onClick={handlePrev}
					className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
					Previous
				</button>
				<button
					onClick={handleNext}
					className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
					Next
				</button>
			</div>
		</div>
	);
}
