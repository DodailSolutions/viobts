import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'VIO BTS — Enterprise IT Services & Technology Solutions',
    short_name: 'VIO BTS',
    description:
      'Richmond, VA-based enterprise IT services firm specializing in big data analytics, cloud enablement, API microservices, AI/ML, and technology workforce solutions.',
    start_url: '/?source=pwa',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait-primary',
    background_color: '#FFFFFF',
    theme_color: '#1c45c8',
    lang: 'en-US',
    dir: 'ltr',
    categories: ['business', 'productivity'],
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/icon-maskable-192.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' },
      { src: '/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
    shortcuts: [
      { name: 'Services', url: '/services', description: 'Explore our IT services' },
      { name: 'Industries', url: '/industries', description: 'Industries we serve' },
      { name: 'Book a Call', url: '/contact', description: 'Get in touch' },
    ],
  };
}
