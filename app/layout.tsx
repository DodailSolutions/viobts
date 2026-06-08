import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileNav } from '@/components/layout/MobileNav';
import { StructuredData } from '@/components/StructuredData';
import { ServiceWorkerRegister } from '@/components/ServiceWorkerRegister';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  themeColor: '#1c45c8',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  colorScheme: 'light',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.viobts.com'),
  title: {
    default: 'VIO BTS — Enterprise IT Services & Technology Solutions | Richmond, VA',
    template: '%s | VIO Business Technology Solutions'
  },
  description: 'VIO BTS is a Richmond, VA-based enterprise IT services firm specializing in big data analytics, cloud enablement, API microservices, AI/ML, and technology workforce solutions for Fortune 500 companies and federal agencies.',
  keywords: [
    'enterprise IT services',
    'technology consulting Richmond VA',
    'IT staffing solutions',
    'big data analytics consulting',
    'cloud enablement services',
    'API microservices development',
    'AI ML consulting',
    'federal IT contractor',
    'open source integration',
    'RPA automation services',
    'CI/CD pipeline consulting',
    'technology workforce solutions'
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.viobts.com',
    siteName: 'VIO BTS',
    title: 'VIO BTS — Enterprise IT Services & Technology Solutions',
    description: 'Scalable, secure, and modern technology infrastructure that accelerates business growth.',
    images: [{ url: '/og-default.jpg', width: 1200, height: 630 }]
  },
  twitter: { 
    card: 'summary_large_image',
    title: 'VIO BTS — Enterprise IT & Technology Solutions',
    description: 'Richmond, VA-based enterprise IT services firm serving Fortune 500 & federal agencies.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  alternates: { canonical: 'https://www.viobts.com' },
  manifest: '/manifest.webmanifest',
  applicationName: 'VIO BTS',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'VIO BTS',
  },
  formatDetection: { telephone: false },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body suppressHydrationWarning className="font-body antialiased bg-primary text-text-primary">
        <StructuredData />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[#1c45c8] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:shadow-elevated"
        >
          Skip to main content
        </a>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <MobileNav />
        </div>
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
