import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const translations = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/translations" }),
  schema: z.object({
    home: z.object({
      hero: z.object({
        title: z.string(),
        subtitle: z.string(),
        description: z.string(),
      }),
      definitionSection: z.object({
        title: z.string(),
        subtitle: z.string(),
        description: z.string(),
      }),
      purposeSection: z.object({
        title: z.string(),
        subtitle: z.string(),
        description: z.string(),
        list: z.array(
          z.object({
            title: z.string(),
            description: z.string(),
          }),
        ),
      }),
      productSection: z.object({
        title: z.string(),
        subtitle: z.string(),
        description: z.string(),
        list: z.array(
          z.object({
            title: z.string(),
            icon: z.string(),
            description: z.string(),
          }),
        ),
      }),
    }),
    details: z.object({
      futures: z.object({
        overview: z.object({
          title: z.string(),
          subtitle: z.string(),
          description: z.string(),
        }),
        features: z.object({
          title: z.string(),
          subtitle: z.string(),
          description: z.string(),
          list: z.array(
            z.object({
              title: z.string(),
              description: z.string(),
            }),
          ),
        }),
        benefits: z.object({
          title: z.string(),
          subtitle: z.string(),
          description: z.string(),
          list: z.array(
            z.object({
              title: z.string(),
              description: z.string(),
            }),
          ),
        }),
        risks: z.object({
          title: z.string(),
          subtitle: z.string(),
          description: z.string(),
          list: z.array(
            z.object({
              title: z.string(),
              description: z.string(),
            }),
          ),
        }),
      }),
      forwards: z.object({
        overview: z.object({
          title: z.string(),
          subtitle: z.string(),
          description: z.string(),
        }),
        features: z.object({
          title: z.string(),
          subtitle: z.string(),
          description: z.string(),
          list: z.array(
            z.object({
              title: z.string(),
              description: z.string(),
            }),
          ),
        }),
        benefits: z.object({
          title: z.string(),
          subtitle: z.string(),
          description: z.string(),
          list: z.array(
            z.object({
              title: z.string(),
              description: z.string(),
            }),
          ),
        }),
        risks: z.object({
          title: z.string(),
          subtitle: z.string(),
          description: z.string(),
          list: z.array(
            z.object({
              title: z.string(),
              description: z.string(),
            }),
          ),
        }),
      }),
      options: z.object({
        overview: z.object({
          title: z.string(),
          subtitle: z.string(),
          description: z.string(),
        }),
        features: z.object({
          title: z.string(),
          subtitle: z.string(),
          description: z.string(),
          list: z.array(
            z.object({
              title: z.string(),
              description: z.string(),
            }),
          ),
        }),
        benefits: z.object({
          title: z.string(),
          subtitle: z.string(),
          description: z.string(),
          list: z.array(
            z.object({
              title: z.string(),
              description: z.string(),
            }),
          ),
        }),
        risks: z.object({
          title: z.string(),
          subtitle: z.string(),
          description: z.string(),
          list: z.array(
            z.object({
              title: z.string(),
              description: z.string(),
            }),
          ),
        }),
      }),
      swaps: z.object({
        overview: z.object({
          title: z.string(),
          subtitle: z.string(),
          description: z.string(),
        }),
        features: z.object({
          title: z.string(),
          subtitle: z.string(),
          description: z.string(),
          list: z.array(
            z.object({
              title: z.string(),
              description: z.string(),
            }),
          ),
        }),
        benefits: z.object({
          title: z.string(),
          subtitle: z.string(),
          description: z.string(),
          list: z.array(
            z.object({
              title: z.string(),
              description: z.string(),
            }),
          ),
        }),
        risks: z.object({
          title: z.string(),
          subtitle: z.string(),
          description: z.string(),
          list: z.array(
            z.object({
              title: z.string(),
              description: z.string(),
            }),
          ),
        }),
      }),
    }),
  }),
});

export const collections = { translations };
