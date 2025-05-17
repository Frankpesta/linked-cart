import { pgTable, serial, varchar, timestamp } from "drizzle-orm/pg-core";

export const waitlist = pgTable("waitlist", {
	id: serial("id").primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	email: varchar("email", { length: 255 }).notNull(),
	phone: varchar("phone", { length: 50 }).notNull(),
	category: varchar("category", { length: 100 }).notNull(),

	// New optional fields for store/restaurant owners
	businessName: varchar("business_name", { length: 255 }),
	businessAddress: varchar("business_address", { length: 500 }),
	postalCode: varchar("postal_code", { length: 20 }),
	businessDescription: varchar("business_description", { length: 100 }),

	// New optional field for shoppers/drivers location
	location: varchar("location", { length: 255 }),

	createdAt: timestamp("created_at").defaultNow(),
});

export type WaitlistEntry = typeof waitlist.$inferInsert;
