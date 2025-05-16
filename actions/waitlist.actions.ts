"use server";

import { db } from "@/db/db";
import { waitlist } from "@/db/schema";
import { z } from "zod";

const waitlistSchema = z.object({
	name: z.string().min(2, "Name must be at least 2 characters"),
	email: z.string().email("Invalid email address"),
	phone: z.string().min(10, "Phone number must be at least 10 characters"),
	category: z.string().min(1, "Please select a category"),
});

export async function joinWaitlist(formData: FormData) {
	try {
		// Extract and validate form data
		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const phone = formData.get("phone") as string;
		const category = formData.get("category") as string;

		const validatedFields = waitlistSchema.safeParse({
			name,
			email,
			phone,
			category,
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
		});

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
