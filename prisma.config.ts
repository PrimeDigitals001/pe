import 'dotenv/config';
import path from 'node:path';
import { defineConfig } from 'prisma/config';

// Load .env.local so Next.js and Prisma share the same env file
import { config } from 'dotenv';
config({ path: path.join(process.cwd(), '.env.local') });

export default defineConfig({
  schema: path.join('prisma', 'schema.prisma'),
  migrations: {
    path: path.join('prisma', 'migrations'),
  },
  datasource: {
    url: process.env.DATABASE_URL!,
  },
});
