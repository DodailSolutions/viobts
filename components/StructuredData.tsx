const SITE_URL = 'https://www.viobts.com';

const graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'VIO Business Technology Solutions',
      alternateName: 'VIO BTS',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/icon-512.png`,
        width: 512,
        height: 512,
      },
      description:
        'Enterprise IT services firm specializing in big data analytics, cloud enablement, API microservices, AI/ML, and technology workforce solutions for Fortune 500 companies and federal agencies.',
      slogan: 'We Are Your Technology Partner',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Richmond',
        addressRegion: 'VA',
        addressCountry: 'US',
      },
      areaServed: 'US',
      knowsAbout: [
        'Big Data Analytics',
        'Cloud Enablement',
        'API & Microservices',
        'AI/ML Consulting',
        'RPA Automation',
        'CI/CD Pipelines',
        'Open Source Integration',
        'IT Staffing',
      ],
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#localbusiness`,
      name: 'VIO BTS',
      image: `${SITE_URL}/og-default.jpg`,
      url: SITE_URL,
      priceRange: '$$$',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Richmond',
        addressRegion: 'VA',
        addressCountry: 'US',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'VIO BTS',
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'en-US',
    },
  ],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
