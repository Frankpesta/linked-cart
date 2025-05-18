"use server";

import { db } from "@/db/db";
import { waitlist } from "@/db/schema";
import { z } from "zod";
import { Resend } from "resend";
import { WaitlistConfirmationEmail } from "@/emails/WaitlistConfirmationEmail";

const resend = new Resend(process.env.RESEND_API_KEY!);

// Extended schema with conditional validation
const waitlistSchema = z
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
		businessName: z.string().min(1).optional(),
		businessAddress: z.string().min(1).optional(),
		postalCode: z.string().optional(),
		businessDescription: z
			.enum(["African", "Chinese", "Indian", "Mexican", "Caribbean", "Others"])
			.optional(),
		location: z.string().optional(),
	})
	.refine(
		(data) => {
			if (
				data.category === "store owner" ||
				data.category === "restaurant owner"
			) {
				return (
					data.businessName && data.businessAddress && data.businessDescription
				);
			}
			if (data.category === "shoppers/drivers") {
				return !!data.location;
			}
			return true;
		},
		{
			message: "Please fill in all required fields for your category",
			path: ["businessName"], // generic path for error reporting
		}
	);

export async function joinWaitlist(formData: FormData) {
	try {
		// Extract fields from formData
		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const phone = formData.get("phone") as string;
		const category = formData.get("category") as
			| "individual"
			| "store owner"
			| "restaurant owner"
			| "shoppers/drivers";

		// Optional fields
		const businessName = formData.get("businessName") as string | null;
		const businessAddress = formData.get("businessAddress") as string | null;
		const postalCode = formData.get("postalCode") as string | null;
		const businessDescription = formData.get("businessDescription") as
			| "African"
			| "Chinese"
			| "Indian"
			| "Mexican"
			| "Caribbean"
			| "Others"
			| null;
		const location = formData.get("location") as string | null;

		// Validate all fields
		const validatedFields = waitlistSchema.safeParse({
			name,
			email,
			phone,
			category,
			businessName: businessName || undefined,
			businessAddress: businessAddress || undefined,
			postalCode: postalCode || undefined,
			businessDescription: businessDescription || undefined,
			location: location || undefined,
		});

		if (!validatedFields.success) {
			return {
				success: false,
				error: "Invalid form data",
				details: validatedFields.error.format(),
			};
		}

		// Insert into database
		await db.insert(waitlist).values({
			name,
			email,
			phone,
			category,
			businessName: businessName || null,
			businessAddress: businessAddress || null,
			postalCode: postalCode || null,
			businessDescription: businessDescription || null,
			location: location || null,
		});

		try {
			await resend.emails.send({
				from: "LinkedCart <onboarding@linkedcart.com>",
				to: email,
				subject: "Welcome to the Waitlist!",
				react: await WaitlistConfirmationEmail({
					name: name,
				}),
			});
		} catch (emailError) {
			console.error("Error sending welcome email:", emailError);
			// Optionally, you can decide whether to throw here or just log and continue
			throw new Error("Failed to send welcome email");
		}
		return {
			success: true,
		};
	} catch (error) {
		console.error("Error adding to waitlist:", error);
		return {
			success: false,
			error: "Failed to add to waitlist",
		};
	}
}
