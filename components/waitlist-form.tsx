"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import ReactSelect from "react-select";
import { cityOptions } from "@/constants/cityOptions";
import { joinWaitlist } from "@/actions/waitlist.actions";

// Type for city options
type CityOption = { value: string; label: string };

// Extended schema to include conditional fields
const formSchema = z
	.object({
		name: z.string().min(2, "Name must be at least 2 characters"),
		email: z.string().email("Invalid email address"),
		phone: z.string().min(10, "Phone number must be at least 10 characters"),
		category: z.enum([
			"individual",
			"store owner",
			"restaurant owner",
			"shoppers/drivers",
		]),
		businessName: z.string().optional(),
		businessAddress: z.string().optional(),
		postalCode: z.string().optional(),
		businessDescription: z
			.enum(["African", "Chinese", "Indian", "Mexican", "Caribbean", "Others"])
			.optional(),
		location: z
			.object({
				value: z.string(),
				label: z.string(),
			})
			.optional(),
	})
	.superRefine((data, ctx) => {
		if (
			data.category === "store owner" ||
			data.category === "restaurant owner"
		) {
			if (!data.businessName || data.businessName.trim() === "") {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message: "Business name is required",
					path: ["businessName"],
				});
			}
			if (!data.businessAddress || data.businessAddress.trim() === "") {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message: "Business address is required",
					path: ["businessAddress"],
				});
			}
			if (!data.businessDescription) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message: "Business description is required",
					path: ["businessDescription"],
				});
			}
		}
		if (data.category === "shoppers/drivers" && !data.location) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: "Location is required",
				path: ["location"],
			});
		}
	});

type FormValues = z.infer<typeof formSchema>;

// Set darkMode to false as a placeholder; replace with your theme logic if needed
const darkMode = false;

const customSelectStyles = {
	control: (provided: any, state: any) => ({
		...provided,
		backgroundColor: darkMode ? "#2D2D2D" : "white",
		borderColor: state.isFocused
			? darkMode
				? "#4A90E2"
				: "#2684FF"
			: darkMode
				? "#555"
				: "#ccc",
		color: darkMode ? "white" : "black",
		boxShadow: state.isFocused
			? darkMode
				? "0 0 0 1px #4A90E2"
				: "0 0 0 1px #2684FF"
			: "none",
		"&:hover": {
			borderColor: darkMode ? "#4A90E2" : "#2684FF",
		},
	}),
	menu: (provided: any) => ({
		...provided,
		backgroundColor: darkMode ? "#2D2D2D" : "white",
		color: darkMode ? "white" : "black",
	}),
	option: (provided: any, state: any) => ({
		...provided,
		backgroundColor: state.isFocused
			? darkMode
				? "#4A90E2"
				: "#2684FF"
			: darkMode
				? "#2D2D2D"
				: "white",
		color: state.isFocused ? "white" : darkMode ? "white" : "black",
		cursor: "pointer",
	}),
	singleValue: (provided: any) => ({
		...provided,
		color: darkMode ? "white" : "black",
	}),
	placeholder: (provided: any) => ({
		...provided,
		color: darkMode ? "#AAA" : "#666",
	}),
	input: (provided: any) => ({
		...provided,
		color: darkMode ? "white" : "black",
	}),
	multiValue: (provided: any) => ({
		...provided,
		backgroundColor: darkMode ? "#555" : "#e2e2e2",
	}),
	multiValueLabel: (provided: any) => ({
		...provided,
		color: darkMode ? "white" : "black",
	}),
	multiValueRemove: (provided: any) => ({
		...provided,
		color: darkMode ? "white" : "black",
		":hover": {
			backgroundColor: darkMode ? "#777" : "#ccc",
			color: darkMode ? "white" : "black",
		},
	}),
};

export default function WaitlistForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			category: "individual",
			businessName: "",
			businessAddress: "",
			postalCode: "",
			businessDescription: undefined,
			location: undefined,
		},
	});

	// Watch category to conditionally render fields
	const category = form.watch("category");

	useEffect(() => {
		if (category === "individual") {
			form.setValue("businessName", "");
			form.setValue("businessAddress", "");
			form.setValue("postalCode", "");
			form.setValue("businessDescription", undefined);
			form.setValue("location", undefined);
		}
		if (category === "shoppers/drivers") {
			form.setValue("businessName", "");
			form.setValue("businessAddress", "");
			form.setValue("postalCode", "");
			form.setValue("businessDescription", undefined);
		}
		if (category === "store owner" || category === "restaurant owner") {
			form.setValue("location", undefined);
		}
	}, [category]);

	async function onSubmit(values: FormValues) {
		setIsSubmitting(true);
		try {
			// Prepare submission payload
			const payload = {
				name: values.name,
				email: values.email,
				phone: values.phone,
				category: values.category,
				...(values.category === "store owner" ||
				values.category === "restaurant owner"
					? {
							businessName: values.businessName,
							businessAddress: values.businessAddress,
							postalCode: values.postalCode,
							businessDescription: values.businessDescription,
						}
					: {}),
				...(values.category === "shoppers/drivers"
					? {
							location: values.location?.label,
						}
					: {}),
			};

			const result = await joinWaitlist(payload);
			if (!result.success) {
				throw new Error(result.error || "Failed to join waitlist");
			}

			toast("You've been added to our waitlist. We'll be in touch soon!");

			form.reset();
		} catch (error) {
			console.error("Error:", error);
			toast("Failed to join waitlist. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				{/* Name */}
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Full Name</FormLabel>
							<FormControl>
								<Input placeholder="John Doe" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Email */}
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input placeholder="john@example.com" type="email" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Phone */}
				<FormField
					control={form.control}
					name="phone"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Phone Number</FormLabel>
							<FormControl>
								<Input placeholder="+1 (555) 123-4567" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Category */}
				<FormField
					control={form.control}
					name="category"
					render={({ field }) => (
						<FormItem>
							<FormLabel>I am a...</FormLabel>
							<Select onValueChange={field.onChange} value={field.value}>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="Select a category" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectItem value="individual">Individual User</SelectItem>
									<SelectItem value="store owner">Store Owner</SelectItem>
									<SelectItem value="restaurant owner">
										Restaurant Owner
									</SelectItem>
									<SelectItem value="shoppers/drivers">
										Shoppers/Drivers
									</SelectItem>
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Conditional fields for Store Owner or Restaurant Owner */}
				{(category === "store owner" || category === "restaurant owner") && (
					<>
						<FormField
							control={form.control}
							name="businessName"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Name of Business</FormLabel>
									<FormControl>
										<Input placeholder="My Business" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="businessAddress"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Business Address and Location</FormLabel>
									<FormControl>
										<Input placeholder="123 Main St, City, State" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="postalCode"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Postal or Zip Code (Optional)</FormLabel>
									<FormControl>
										<Input placeholder="12345 or A1B 2C3" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="businessDescription"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Description of Business</FormLabel>
									<Select onValueChange={field.onChange} value={field.value}>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select description" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectItem value="African">African</SelectItem>
											<SelectItem value="Chinese">Chinese</SelectItem>
											<SelectItem value="Indian">Indian</SelectItem>
											<SelectItem value="Mexican">Mexican</SelectItem>
											<SelectItem value="Caribbean">Caribbean</SelectItem>
											<SelectItem value="Others">Others (General)</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
					</>
				)}

				{/* Conditional field for Shoppers/Drivers */}
				{category === "shoppers/drivers" && (
					<FormField
						control={form.control}
						name="location"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Location (City in US or Canada)</FormLabel>
								<FormControl>
									<ReactSelect
										options={cityOptions}
										value={field.value || null}
										onChange={(val: CityOption | null) => field.onChange(val)}
										placeholder="Select your city"
										isClearable
										styles={customSelectStyles} // Add this line
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				)}

				<Button
					type="submit"
					className="w-full dark:text-white"
					disabled={isSubmitting}>
					{isSubmitting ? (
						<>
							<Loader2 className="mr-2 h-4 w-4 animate-spin" />
							Joining...
						</>
					) : (
						"Join Waitlist"
					)}
				</Button>
			</form>
		</Form>
	);
}
