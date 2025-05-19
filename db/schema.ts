import { pgTable, serial, varchar, timestamp } from "drizzle-orm/pg-core";

export const waitlist = pgTable("waitlist", {
	id: serial("id").primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	email: varchar("email", { length: 255 }).notNull(),
	phone: varchar("phone", { length: 50 }).notNull(),
	category: varchar("category", { length: 100 }).notNull(),

	// Optional fields for store/restaurant owners
	businessName: varchar("business_name", { length: 255 }),
	businessAddress: varchar("business_address", { length: 500 }),
	postalCode: varchar("postal_code", { length: 20 }),
	businessDescription: varchar("business_description", { length: 100 }),

	// Optional fields for shoppers/drivers
	country: varchar("country", { length: 50 }),
	city: varchar("city", { length: 255 }),

	createdAt: timestamp("created_at").defaultNow(),
});

export type WaitlistEntry = typeof waitlist.$inferInsert;
