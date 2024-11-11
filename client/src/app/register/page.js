"use client";

import { useFormik } from "formik";
import React from "react";

const validate = (values) => {
	const errors = {};

	if (!values.firstName) {
		errors.firstName = "Required";
	} else if (values.firstName.length > 15) {
		errors.firstName = "Must be 15 characters or less";
	}

	if (!values.lastName) {
		errors.lastName = "Required";
	} else if (values.lastName.length > 20) {
		errors.lastName = "Must be 20 characters or less";
	}

	if (!values.email) {
		errors.email = "Required";
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = "Invalid email address";
	}

	return errors;
};

const SignupForm = () => {
	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
		},
		validate,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});
	return (
		<form
			className="flex flex-col gap-4 w-[400px] p-4 m-auto justify-center items-center bg-green-400"
			onSubmit={formik.handleSubmit}>
			<h1>SignupForm</h1>
			<label
				className="w-[200px]"
				htmlFor="firstName">
				First Name:
			</label>
			<input
				id="firstName"
				name="firstName"
				type="text"
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.firstName}
			/>
			<span className="text-red-500">
				{formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
			</span>

			<label
				className="w-[200px]"
				htmlFor="lastName">
				Last Name:
			</label>
			<input
				id="lastName"
				name="lastName"
				type="text"
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.lastName}
			/>
			<span class="text-red-500">
				{formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
			</span>

			<label
				className="w-[200px]"
				htmlFor="email">
				Email Address
			</label>
			<input
				id="email"
				name="email"
				type="email"
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.email}
			/>
			<span class="text-red-500">
				{formik.errors.email ? <div>{formik.errors.email}</div> : null}
			</span>

			<button
				className="h-8 w-32 bg-red-500 hover:bg-red-900"
				type="submit">
				Submit
			</button>
		</form>
	);
};

export default SignupForm;
