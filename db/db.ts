import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

// Initialize Neon client
const sql = neon(process.env.DATABASE_URL!);

// Initialize Drizzle ORM
export const db = drizzle(sql, { schema });
