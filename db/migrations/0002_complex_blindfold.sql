ALTER TABLE "waitlist" ADD COLUMN "country" varchar(50);--> statement-breakpoint
ALTER TABLE "waitlist" ADD COLUMN "city" varchar(255);--> statement-breakpoint
ALTER TABLE "waitlist" DROP COLUMN "location";