import { NextResponse } from "next/server";
import { db } from "@/db/db";
import { waitlist } from "@/db/schema";
import { z } from "zod";

// Define validation schema
const waitlistSchema = z.object({
	name: z.string().min(2, "Name must be at least 2 characters"),
	email: z.string().email("Invalid email address"),
	phone: z.string().min(10, "Phone number must be at least 10 characters"),
	category: z.string().min(1, "Please select a category"),
});

export async function POST(request: Request) {
	try {
		// Parse request body
		const body = await request.json();

		// Validate input
		const result = waitlistSchema.safeParse(body);
		if (!result.success) {
			return NextResponse.json(
				{ error: "Invalid input", details: result.error.format() },
				{ status: 400 }
			);
		}

		// Insert into database
		const { name, email, phone, category } = result.data;
		await db.insert(waitlist).values({
			name,
			email,
			phone,
			category,
		});

		return NextResponse.json({ success: true }, { status: 201 });
	} catch (error) {
		console.error("Error adding to waitlist:", error);
		return NextResponse.json(
			{ error: "Failed to add to waitlist" },
			{ status: 500 }
		);
	}
}
