import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://dedetizadora-campo-grande.pages.dev',
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
