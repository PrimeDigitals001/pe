import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const globalForPrisma = globalThis;

function createClient() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error('DATABASE_URL is not set. Add it to your .env.local (local) or Vercel project environment variables (production).');
  }
  const adapter = new PrismaPg({ connectionString: url });
  return new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === 'development' ? ['warn', 'error'] : ['error'],
  });
}

/**
 * Lazy Prisma client — the real PrismaClient is only constructed on first access.
 * This prevents `next build` from crashing during page-data collection when
 * DATABASE_URL happens to be missing in that phase, while still behaving
 * identically at runtime.
 */
export const prisma = new Proxy(
  {},
  {
    get(_target, prop) {
      if (!globalForPrisma.__prisma) {
        globalForPrisma.__prisma = createClient();
      }
      const value = globalForPrisma.__prisma[prop];
      return typeof value === 'function' ? value.bind(globalForPrisma.__prisma) : value;
    },
  }
);
