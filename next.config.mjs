/** @type {import('next').NextConfig} */
const nextConfig = {
  // Force these packages to NOT be bundled by webpack/turbopack — they should
  // stay as external Node modules so Prisma's engine binaries + pg can load
  // at runtime rather than being tree-shaken or analyzed at build time.
  serverExternalPackages: ['@prisma/client', '@prisma/adapter-pg', 'pg', '@react-pdf/renderer'],
};

export default nextConfig;
