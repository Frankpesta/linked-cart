import { pgTable, serial, varchar, timestamp } from "drizzle-orm/pg-core";

export const waitlist = pgTable("waitlist", {
	id: serial("id").primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	email: varchar("email", { length: 255 }).notNull(),
	phone: varchar("phone", { length: 50 }).notNull(),
	category: varchar("category", { length: 100 }).notNull(),
	createdAt: timestamp("created_at").defaultNow(),
});

export type WaitlistEntry = typeof waitlist.$inferInsert;
