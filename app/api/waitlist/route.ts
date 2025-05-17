import { NextResponse } from "next/server";
import { db } from "@/db/db";
import { waitlist } from "@/db/schema";
import { z } from "zod";

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

export async function POST(request: Request) {
	try {
		const body = await request.json();

		// Validate input
		const result = waitlistSchema.safeParse(body);
		if (!result.success) {
			return NextResponse.json(
				{ error: "Invalid input", details: result.error.format() },
				{ status: 400 }
			);
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
		} = result.data;

		// Insert into database
		await db.insert(waitlist).values({
			name,
			email,
			phone,
			category,
			businessName: businessName ?? null,
			businessAddress: businessAddress ?? null,
			postalCode: postalCode ?? null,
			businessDescription: businessDescription ?? null,
			location: location ?? null,
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
