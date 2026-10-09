import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const translations = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/translations" }),
  schema: z.object({
    pages: z.array(z.any()),
  }),
});

export const collections = { translations };
