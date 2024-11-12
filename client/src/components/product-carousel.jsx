import React, { useState } from "react";

const products = [
	{
		id: 1,
		name: "Jogger",
		description: "Description of Jogger",
		price: "Rs. 900",
		image: "https://i.imgur.com/9LFjwpI.jpeg",
		// Replace with product image URLs
	},
	{
		id: 2,
		name: "White Short",
		description: "Description of white short",
		price: "Rs. 600",
		image: "https://i.imgur.com/mp3rUty.jpeg",
	},
	{
		id: 3,
		name: "Shirt",
		description: "Description of shirt",
		price: "Rs. 700",
		image: "https://i.imgur.com/QkIa5tT.jpeg",
	},
	{
		id: 4,
		name: "Jeans",
		description: "Comfortable denim jeans for everyday wear",
		price: "Rs. 1200",
		image: "https://i.imgur.com/lGTSdGC.jpeg",
	},
	{
		id: 5,
		name: "Sneakers",
		description: "Casual sneakers with a modern design",
		price: "Rs. 1500",
		image: "https://i.imgur.com/cFNgsHo.jpeg",
	},
	{
		id: 6,
		name: "Jacket",
		description: "Warm and stylish jacket for winter",
		price: "Rs. 2000",
		image: "https://i.imgur.com/5mX6aEK.jpeg",
	},
	{
		id: 7,
		name: "Hat",
		description: "Trendy hat to complement any outfit",
		price: "Rs. 300",
		image: "https://i.imgur.com/7qUK3F5.jpeg",
	},
	{
		id: 8,
		name: "Scarf",
		description: "Soft and cozy scarf, perfect for chilly days",
		price: "Rs. 500",
		image: "https://i.imgur.com/sBKf1tk.jpeg",
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
			<h2 className="text-green-500 text-xl mb-4">Flash Products</h2>
			<div className="flex justify-center items-center bg-white text-black h-96 w-full  rounded-lg shadow-lg overflow-hidden">
				<div className="flex flex-col w-full  justify-between items-center">
					<img
						src={currentProduct.image}
						alt={currentProduct.name}
						className="h-full w-96 object-cover"
					/>
				</div>
				<div className="p-4 w-full">
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
