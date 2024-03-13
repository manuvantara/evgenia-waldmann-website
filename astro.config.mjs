import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import { sanityIntegration } from "@sanity/astro";

import { loadEnv } from "vite";

export const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  "",
);

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sanityIntegration({
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_DATASET,
      // Set useCdn to false if you're building statically.
      useCdn: false,
      studioBasePath: "/admin",
      apiVersion: "2023-03-20",
    }),
    react(),
  ],
  output: "hybrid",
  adapter: netlify(),
});
