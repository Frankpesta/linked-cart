"use server";

import { db } from "@/db/db";
import { waitlist } from "@/db/schema";
import { z } from "zod";
import { Resend } from "resend";
import { WaitlistConfirmationEmail } from "@/emails/WaitlistConfirmationEmail";

const resend = new Resend(process.env.RESEND_API_KEY!);

// Schema remains unchanged
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
			path: ["businessName"],
		}
	);

// Accepts structured data directly from frontend
export async function joinWaitlist(data: z.infer<typeof waitlistSchema>) {
	try {
		// Validate data
		const validated = waitlistSchema.safeParse(data);

		if (!validated.success) {
			return {
				success: false,
				error: "Invalid form data",
				details: validated.error.format(),
			};
		}

		const {
			name,
			email,
			phone,
			category,
			businessName,
			businessAddress,
			postalCode,
			businessDescription,
			location,
		} = validated.data;

		// Insert into DB
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

		// Send confirmation email
		try {
			await resend.emails.send({
				from: "LinkedCart <hello@linkedcart.com>",
				to: email,
				subject: "Welcome to the Waitlist!",
				react: await WaitlistConfirmationEmail({ name }),
			});
		} catch (emailError) {
			console.error("Error sending welcome email:", emailError);
		}

		return { success: true };
	} catch (error) {
		console.error("Error adding to waitlist:", error);
		return {
			success: false,
			error: "Failed to add to waitlist",
		};
	}
}
