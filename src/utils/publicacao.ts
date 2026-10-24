import type { CollectionEntry } from 'astro:content';

// Data de hoje no fuso de Campo Grande (AAAA-MM-DD). Artigos com pubDate futura
// ficam fora do build até o dia chegar; o workflow publicacao-diaria reconstrói o site.
const hoje = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Campo_Grande' }).format(new Date());

export function publicado({ data }: CollectionEntry<'artigos'>): boolean {
  return !data.draft && data.pubDate.toISOString().slice(0, 10) <= hoje;
}
