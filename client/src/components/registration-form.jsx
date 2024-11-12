"use client";

import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Image from "next/image";

const validationSchema = Yup.object().shape({
	firstName: Yup.string().required("First name is required"),
	lastName: Yup.string().required("Last name is required"),
	email: Yup.string().email("Invalid email").required("Email is required"),
	password: Yup.string()
		.min(8, "Password must be at least 8 characters")
		.matches(/[a-zA-Z]/, "Password must contain at least one letter")
		.matches(/[0-9]/, "Password must contain at least one number")
		.required("Password is required"),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref("password"), null], "Passwords must match")
		.required("Confirm password is required"),
});

const InputField = ({ field, form: { touched, errors }, ...props }) => (
	<div className="mb-4">
		<label
			htmlFor={field.name}
			className="block text-black mb-2">
			{props.label}
		</label>
		<input
			{...field}
			{...props}
			className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
				touched[field.name] && errors[field.name]
					? "border-red-500"
					: "border-green-500"
			}`}
		/>
		{touched[field.name] && errors[field.name] && (
			<div className="text-red-500 text-sm mt-1">{errors[field.name]}</div>
		)}
	</div>
);

export function RegistrationFormJsx() {
	const initialValues = {
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
	};

	const handleSubmit = (values, { setSubmitting }) => {
		// Here you would typically send the form data to your backend
		console.log("Form submitted:", values);
		setTimeout(() => {
			alert(JSON.stringify(values, null, 2));
			setSubmitting(false);
		}, 400);
	};

	return (
		<div className="min-h-screen bg-white flex items-center justify-center p-4">
			<div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
				<div className="flex gap-4">
					<Image
						src="/logo.png"
						height={100}
						width={100}
					/>
					<h2 className="text-3xl font-bold mb-6 text-center text-green-700">
						Create an Account
					</h2>
				</div>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}>
					{({ isSubmitting }) => (
						<Form
							className="space-y-4"
							action="/home">
							<div className="grid grid-cols-2 gap-4">
								<Field
									name="firstName"
									label="First Name"
									type="text"
									component={InputField}
								/>
								<Field
									name="lastName"
									label="Last Name"
									type="text"
									component={InputField}
								/>
							</div>
							<Field
								name="email"
								label="Email"
								type="email"
								component={InputField}
							/>
							<Field
								name="password"
								label="Password"
								type="password"
								component={InputField}
							/>
							<Field
								name="confirmPassword"
								label="Confirm Password"
								type="password"
								component={InputField}
							/>
							<button
								type="submit"
								disabled={isSubmitting}
								className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50">
								{isSubmitting ? "Registering..." : "Register"}
							</button>
						</Form>
					)}
				</Formik>
				<p className="mt-4 text-center text-sm text-black">
					Already have an account?{" "}
					<a
						href="/login"
						className="font-medium text-green-700 hover:text-green-800">
						Sign in
					</a>
				</p>
			</div>
		</div>
	);
}
