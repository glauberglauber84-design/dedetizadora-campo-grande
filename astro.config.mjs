import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://dedetizacaocampograndems.com.br',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [
    tailwind({ applyBaseStyles: true }),
    sitemap()
  ],
  build: {
    inlineStylesheets: 'auto'
  },
  compressHTML: true
});
