import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

export const projectId =
  import.meta.env.PUBLIC_SANITY_PROJECT_ID! || "oq2edo4a";
export const dataset = import.meta.env.PUBLIC_SANITY_DATASET! || "production";

export default defineConfig({
  name: "evgenia-waldmann",
  title: "Evgenia Waldmann",
  projectId: "oq2edo4a",
  dataset: "production",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
