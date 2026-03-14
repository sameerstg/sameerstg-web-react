// Prisma configuration for Supabase PostgreSQL
// Run: npm install --save-dev prisma dotenv
import { config } from "dotenv";
import { defineConfig } from "prisma/config";

// Load environment variables from .env.local
config({ path: ".env" });

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // Use DIRECT_URL for CLI operations (migrations, introspection)
    // This connects directly to port 5432, bypassing pgbouncer which doesn't support migrations
    // Runtime queries still use DATABASE_URL (pgbouncer on 6543) via lib/prisma.ts
    url: process.env["DATABASE_URL"],
  },
});