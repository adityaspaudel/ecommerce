import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa6";

const Card = () => {
	return (
		<div className="flex flex-col gap-4 border-[1px] border-red-400 w-[200px] hover:ring-4 ">
			<Image
				src="/shop-cart.jpg"
				height={400}
				width={400}
			/>
			<div className="p-2">
				<p>Card</p>
				<h2 className="flex gap-16">
					Rs.364 <span className="text-red-500 italic">-10%</span>
				</h2>
				<div>
					<span className="flex text-yellow-600">
						<FaStar />
						<FaStar />
						<FaStar />
						<FaStar />
						<FaStar />
					</span>
					<span></span>
				</div>
			</div>
		</div>
	);
};

export default Card;
