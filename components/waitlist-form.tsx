"use client";

import { useState } from "react";
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

const formSchema = z.object({
	name: z.string().min(2, "Name must be at least 2 characters"),
	email: z.string().email("Invalid email address"),
	phone: z.string().min(10, "Phone number must be at least 10 characters"),
	category: z.string().min(1, "Please select a category"),
});

type FormValues = z.infer<typeof formSchema>;

export default function WaitlistForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			category: "",
		},
	});

	async function onSubmit(values: FormValues) {
		setIsSubmitting(true);
		try {
			const response = await fetch("/api/waitlist", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(values),
			});

			if (!response.ok) {
				const error = await response.json();
				throw new Error(error.error || "Failed to join waitlist");
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

				<FormField
					control={form.control}
					name="category"
					render={({ field }) => (
						<FormItem>
							<FormLabel>I am a...</FormLabel>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="Select a category" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectItem value="individual">Individual User</SelectItem>
									<SelectItem value="business">Business Owner</SelectItem>
									<SelectItem value="driver">Potential Driver</SelectItem>
									<SelectItem value="merchant">
										Store/Restaurant Owner
									</SelectItem>
									<SelectItem value="other">Other</SelectItem>
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type="submit" className="w-full" disabled={isSubmitting}>
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
