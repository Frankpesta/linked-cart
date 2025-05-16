CREATE TABLE "waitlist" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"phone" varchar(50) NOT NULL,
	"category" varchar(100) NOT NULL,
	"created_at" timestamp DEFAULT now()
);
