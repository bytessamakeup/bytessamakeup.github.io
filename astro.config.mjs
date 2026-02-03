// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import keystatic from "@keystatic/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://xujaan.github.io",
  // Note: base path removed for local dev with Keystatic
  // For production GitHub Pages, add: base: "/bytessamakeup",
  output: "static",
  integrations: [react(), keystatic()],
});
