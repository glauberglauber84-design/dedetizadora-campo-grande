import { defineCollection, z } from 'astro:content';

const artigos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().max(70),
    description: z.string().max(160),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    autor: z.string().default('Equipe Dedetizadora Campo Grande'),
    categoria: z.enum(['cupim', 'baratas', 'ratos', 'mosquitos', 'escorpioes', 'formigas', 'prevencao', 'geral']).default('geral'),
    cidade: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { artigos };
