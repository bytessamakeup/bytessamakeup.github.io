// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import keystatic from "@keystatic/astro";

// Check if we're in production build (CI/CD or npm run build)
const isProduction =
  process.env.NODE_ENV === "production" || process.argv.includes("build");

// https://astro.build/config
export default defineConfig({
  site: "https://xujaan.github.io",
  base: "/bytessamakeup",
  // Use hybrid mode in development for Keystatic admin, static for production
  output: isProduction ? "static" : "hybrid",
  // Only include Keystatic integration in development
  integrations: isProduction ? [react()] : [react(), keystatic()],
});
