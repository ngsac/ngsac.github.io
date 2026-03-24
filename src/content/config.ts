import { defineCollection, z } from "astro:content";

const meetings = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    quarter: z.string(),
    time: z.string().default(""),
    agenda: z.array(z.string()).default([]),
    highlights: z.array(z.string()).default([]),
    draft: z.boolean().default(false)
  })
});

export const collections = {
  meetings
};
