// Gera public/og-default.jpg (1200x630) a partir de SVG inline usando sharp.
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outJpg = path.resolve(__dirname, '..', 'public', 'og-default.jpg');
const outSvg = path.resolve(__dirname, '..', 'public', 'og-default.svg');

const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stop-color="#1b5e20"/>
      <stop offset="1" stop-color="#0a3d10"/>
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M0 40V0h40" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <g transform="translate(80, 170)">
    <rect x="0" y="0" width="88" height="88" rx="16" fill="#ffffff"/>
    <path d="M44 14 20 22v24c0 18 12 32 24 36 12-4 24-18 24-36V22L44 14Z" fill="#1b5e20" transform="translate(0,0)"/>
    <path d="M36 54l-10-10 5-5 5 5 18-18 5 5-23 23Z" fill="#ffffff" transform="translate(0,0)"/>
  </g>
  <text x="80" y="340" font-family="Inter, Arial, sans-serif" font-size="76" font-weight="800" fill="#ffffff">Dedetizadora</text>
  <text x="80" y="420" font-family="Inter, Arial, sans-serif" font-size="76" font-weight="800" fill="#ffffff">Campo Grande</text>
  <text x="80" y="490" font-family="Inter, Arial, sans-serif" font-size="34" font-weight="500" fill="#c8e6c9">Controle de pragas em Campo Grande e região · MS</text>
  <text x="80" y="560" font-family="Inter, Arial, sans-serif" font-size="26" font-weight="500" fill="#ffffff" opacity="0.85">WhatsApp: (67) 99999-9999</text>
</svg>`;

// Sempre escreve o SVG como fallback
await writeFile(outSvg, svg, 'utf8');

try {
  const { default: sharp } = await import('sharp');
  await sharp(Buffer.from(svg)).jpeg({ quality: 85 }).toFile(outJpg);
  console.log('OG JPG gerado em', outJpg);
} catch (err) {
  console.warn('[gen-og] sharp indisponível, apenas SVG gerado:', err?.message || err);
}
