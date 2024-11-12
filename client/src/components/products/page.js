"use client";
import React, { useEffect, useState } from "react";

const Products = () => {
	const [productCount, setProductCount] = useState(0);
	const [productList, setProductList] = useState([]);
	useEffect(() => {
		fetchProductList();
		setProductCount(productCount + 1);
	}, []);
	const fetchProductList = async () => {
		const data = await fetch("https://api.escuelajs.co/api/v1/products");
		const dataObj = await data.json();
		setProductList(dataObj);
	};
	return (
		<div>
			<div>Products</div>
			<div>
				{productList.map((item, key1) => {
					return (
						<div key={key1}>
							<div>{item.id}</div>
							<div>
								<img
									src={item.category.image}
									height={200}
									width={200}
								/>
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
