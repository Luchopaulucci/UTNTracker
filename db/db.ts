// Make sure to install the 'pg' package
import { drizzle } from "drizzle-orm/node-postgres";
export const db = drizzle(process.env.POSTGRES_URL!);
