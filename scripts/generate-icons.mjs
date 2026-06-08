import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const OUT = join(process.cwd(), 'public');
const ACCENT = '#1c45c8';
const LOGO = join(OUT, 'images/logo/vio-logo.png'); // white logo (for dark/blue bg)

await mkdir(OUT, { recursive: true });

// Crop the "VIO" mark (drop the bottom tagline strip) for a bold, legible square icon.
const logoMeta = await sharp(LOGO).metadata();
const markBuf = await sharp(LOGO)
  .extract({ left: 0, top: 0, width: logoMeta.width, height: Math.round(logoMeta.height * 0.82) })
  .trim()
  .toBuffer();

// Build a square brand icon: white VIO mark centered on the blue brand color.
const icon = async (size, { maskable = false } = {}) => {
  const inner = Math.round(size * (maskable ? 0.58 : 0.7)); // smaller for maskable safe zone
  const radius = maskable ? 0 : Math.round(size * 0.22);
  const mark = await sharp(markBuf)
    .resize({ width: inner, fit: 'inside' })
    .toBuffer();
  const mask = Buffer.from(
    `<svg width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${radius}"/></svg>`
  );
  return sharp({ create: { width: size, height: size, channels: 4, background: ACCENT } })
    .composite([
      { input: mark, gravity: 'center' },
      { input: mask, blend: 'dest-in' }, // round the corners
    ])
    .png()
    .toBuffer();
};

const targets = [
  { name: 'icon-192.png', size: 192 },
  { name: 'icon-512.png', size: 512 },
  { name: 'icon-maskable-192.png', size: 192, maskable: true },
  { name: 'icon-maskable-512.png', size: 512, maskable: true },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'favicon-32.png', size: 32 },
  { name: 'favicon-16.png', size: 16 },
];

for (const t of targets) {
  const buf = await icon(t.size, { maskable: t.maskable });
  await sharp(buf).toFile(join(OUT, t.name));
  console.log('✓', t.name);
}

// OG image 1200x630 — real white logo on dark brand gradient + tagline
const ogBg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1c45c8"/>
      <stop offset="100%" stop-color="#7C3AED"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="#0F172A"/>
  <rect width="1200" height="630" fill="url(#g)" opacity="0.14"/>
  <text x="600" y="470" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="500" font-size="34" fill="#94A3B8">Enterprise IT Services &#183; Big Data &#183; Cloud &#183; AI/ML</text>
</svg>`;
const ogLogo = await sharp(LOGO).resize({ width: 560, fit: 'inside' }).toBuffer();
await sharp(Buffer.from(ogBg))
  .composite([{ input: ogLogo, top: 150, left: 320 }])
  .jpeg({ quality: 88 })
  .toFile(join(OUT, 'og-default.jpg'));
console.log('✓ og-default.jpg');

// favicon.ico (png-based — modern browsers accept png in .ico)
await sharp(await icon(48)).resize(48, 48).toFormat('png').toFile(join(OUT, 'favicon.ico'));
console.log('✓ favicon.ico');
