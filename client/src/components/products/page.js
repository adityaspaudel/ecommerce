"use client";
import React, { useEffect, useState } from "react";

const Products = () => {
	const [productCount, setProductCount] = useState(0);
	const [productList, setProductList] = useState([]);
	useEffect(() => {
		fetchProductList();
	}, []);

	const fetchProductList = async () => {
		const data = await fetch("https://api.escuelajs.co/api/v1/products");
		const dataObj = await data.json();
		setProductCount(dataObj.length);
		setProductList(dataObj);
	};

	return (
		<div>
			<div className="flex gap-8 flex-wrap justify-center">
				{productList.map((item, key1) => {
					return (
						<div
							className=" flex flex-col items-center hover:cursor-pointer  w-52 border-2 hover:border-gray-400"
							key={key1}>
							<div>
								<img
									title={item.description}
									className="object-cover w-full"
									src={item.category.image}
									height={200}
									width={200}
								/>
								<div className="flex flex-col text-sm">
									<div>{item.title}</div>
									<div>{item.id}</div>
									<div>Rs. {item.price}</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			{productCount}
		</div>
	);
};

export default Products;
