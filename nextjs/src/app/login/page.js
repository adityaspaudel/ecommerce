"use client";

import React from "react";
import { Formik } from "formik";

const Loginform = () => (
	<div className="flex flex-col gap-4 w-[400px] p-4 m-auto justify-center items-center bg-green-400">
		<h1 className="text-2xl font-bold bg-red-400 w-full">Login form</h1>
		<Formik
			initialValues={{ email: "", password: "" }}
			validate={(values) => {
				const errors = {};
				if (!values.email) {
					errors.email = "Required";
				} else if (
					!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
				) {
					errors.email = "Invalid email address";
				}
				return errors;
			}}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					setSubmitting(false);
				}, 400);
			}}>
			{({
				values,
				errors,
				touched,
				handleChange,
				handleBlur,
				handleSubmit,
				isSubmitting,
				/* and other goodies */
			}) => (
				<form
					className="flex flex-col gap-4 w-full text-black"
					onSubmit={handleSubmit}>
					<label htmlFor="email">Email:</label>
					<input
						className="px-2"
						type="email"
						name="email"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.email}
					/>
					<span className="text-red-400 italic">
						{errors.email && touched.email && errors.email}
					</span>
					<level htmlFor="password">Password:</level>
					<input
						className="px-2"
						type="password"
						name="password"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.password}
					/>
					<span className="text-red-400 italic">
						{errors.password && touched.password && errors.password}
					</span>
					<button
						type="submit"
						disabled={isSubmitting}>
						Submit
					</button>
				</form>
			)}
		</Formik>
	</div>
);

export default Loginform;
