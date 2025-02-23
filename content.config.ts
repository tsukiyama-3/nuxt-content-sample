import { defineContentConfig, defineCollection, z } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    }),
    officialServiceIds: defineCollection({
      type: 'data',
      source: 'data/**.json',
      schema: z.object({
        services: z.record(z.number().array()),
      })
    })
  }
});