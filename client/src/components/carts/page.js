"use client";
import React, { useState } from "react";
import { LuCodesandbox } from "react-icons/lu";

const Cart = () => {
	const [count, setCount] = useState(0);

	return (
		<div className="flex flex-col gap-4 text-[12px] h-[400px] w-[300px] bg-blue-100 text-black m-auto ">
			<div className="flex flex-col gap-4 text-[12px] h-[400px] w-[300px] bg-blue-100 text-black m-auto p-2 rounded-xl">
				<h1 className="font-bold text-lg text-center bg-red-400 text-white">
					YOUR CART
				</h1>
				<div>
					<div className="flex gap-10 justify-between items-center">
						<span>50$</span>
						<span className="h-8 w-8 border-[1px] border-black text-center">
							x
						</span>
					</div>
					<hr className="border-black my-2" />
					<div>
						<div className="flex gap-10 justify-between items-center">
							<span>Melt Brazil</span>
							<span className="h-8 w-8 border-[1px] border-black text-center">
								x
							</span>
						</div>
						<div className="flex gap-10 mt-2 justify-between items-center">
							<span>300$</span>
							<div className="flex gap-2">
								<button
									className=" border-[1px] h-8 w-8 border-black bg-red-400"
									onClick={() => setCount(count - 1)}>
									-
								</button>
								<span className=" ">{count}</span>
								<button
									className=" border-[1px] h-8 w-8 border-black bg-red-400"
									onClick={() => setCount(count + 1)}>
									+
								</button>
							</div>
						</div>
						<hr className="border-black my-2" />
					</div>
					<div className="flex gap-10 justify-between items-center italic">
						<span>promo code: </span>
						<input
							type="text"
							className="border-[1px] border-black uppercase text-right px-2"
						/>
					</div>
					<hr className="border-black my-2" />

					<div className="flex gap-10 justify-between items-center font-bold">
						<span>sub total:</span>
						<hr className="border-black my-2" />
						<span>350$</span>
					</div>

					<br />
					<hr className="border-black my-2" />
					<div className="flex flex-col gap-2">
						<div className="flex gap-10 justify-between items-center">
							<span>commission:</span>
							<span>1$</span>
						</div>{" "}
						<div className="flex gap-10 justify-between items-center">
							<span>payment for services</span>
							<span>2$</span>
						</div>{" "}
						<div className="flex gap-10 justify-between items-center">
							<span>promo discount</span>
							<span>0%</span>
						</div>
						<div className="flex gap-10 justify-between items-center font-bold">
							<span>TOTAL</span>
							<span>353$</span>
						</div>
					</div>
				</div>
			</div>
			<button className="bg-red-500 hover:bg-red-800 text-xl font-bold text-white h-12">
				Pay
			</button>
		</div>
	);
};

export default Cart;
