import { defineCollection, z } from "astro:content";

const documentsCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
	}),
});

export const collections = {
	documents: documentsCollection,
};
