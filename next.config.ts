import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // ppr: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
      },
    ],
  },
  async redirects() {
    return [
      { source: '/technology-workforce-2', destination: '/services/technology-workforce', permanent: true },
      { source: '/big-data-and-analytics-3', destination: '/services/big-data-analytics', permanent: true },
      { source: '/open-source-integration-2', destination: '/services/open-source-integration', permanent: true },
      { source: '/cloud-enablement-and-ci-cd-pipelines', destination: '/services/cloud-enablement-cicd', permanent: true },
      { source: '/api-and-microservices-2', destination: '/services/api-microservices', permanent: true },
      { source: '/rpa-ml-ai-2', destination: '/services/rpa-ml-ai', permanent: true },
      { source: '/banking-and-financial-services', destination: '/industries/banking-financial-services', permanent: true },
      { source: '/contact', destination: '/contact-us', permanent: true },
    ]
  }
};

export default withPayload(nextConfig);
