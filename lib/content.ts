import {
  Users,
  Database,
  Code,
  Cloud,
  Cpu,
  Bot,
  type LucideIcon,
} from "lucide-react"

/**
 * Single source of truth for marketing content (services & industries).
 *
 * Consumed by: ServicesGrid / IndustriesPreview (home + listing pages),
 * the dynamic [slug] detail pages (content + generateStaticParams +
 * generateMetadata), and app/sitemap.ts. Keep slugs in sync with the
 * permanent redirects in next.config.ts.
 */

export interface ServiceItem {
  slug: string
  title: string
  /** Short one-liner for cards. */
  teaser: string
  /** Fuller copy for the detail hero and meta description. */
  description: string
  features: string[]
  icon: LucideIcon
}

export interface IndustryItem {
  slug: string
  title: string
  emoji: string
  teaser: string
  description: string
  challenges: string[]
}

export const services: ServiceItem[] = [
  {
    slug: "technology-workforce",
    title: "Technology Workforce",
    teaser: "Scale your team with elite engineering talent and IT professionals.",
    description:
      "Scale your team with elite engineering talent and IT professionals. We provide the right people with the right skills to accelerate your projects.",
    features: ["Staff Augmentation", "Dedicated Teams", "Contract-to-Hire", "Direct Placement"],
    icon: Users,
  },
  {
    slug: "big-data-analytics",
    title: "Big Data & Analytics",
    teaser: "Transform raw data into actionable enterprise intelligence.",
    description:
      "Transform raw data into actionable enterprise intelligence. We architect scalable data lakes, streaming pipelines, and analytical models.",
    features: ["Data Warehousing", "Real-time Processing", "Business Intelligence", "Predictive Analytics"],
    icon: Database,
  },
  {
    slug: "open-source-integration",
    title: "Open Source Integration",
    teaser: "Secure and scalable implementation of open source technologies.",
    description:
      "Adopt open source with confidence. We integrate, harden, and support best-in-class open source platforms so you avoid vendor lock-in without compromising on security or reliability.",
    features: ["Platform Evaluation", "Secure Integration", "License Compliance", "Long-term Support"],
    icon: Code,
  },
  {
    slug: "cloud-enablement-cicd",
    title: "Cloud Enablement & CI/CD",
    teaser: "Accelerate deployment and modernize your infrastructure.",
    description:
      "Accelerate delivery and modernize your infrastructure. We design multi-cloud foundations, automate CI/CD pipelines, and embed DevOps practices that ship reliably at scale.",
    features: ["Cloud Migration", "Infrastructure as Code", "CI/CD Automation", "Observability & SRE"],
    icon: Cloud,
  },
  {
    slug: "api-microservices",
    title: "API & Microservices",
    teaser: "Build resilient, decoupled architectures for maximum agility.",
    description:
      "Build resilient, decoupled architectures for maximum agility. We design API-first systems and microservices that are independently deployable, observable, and built to scale.",
    features: ["API Design & Governance", "Service Decomposition", "Event-Driven Architecture", "API Gateway & Security"],
    icon: Cpu,
  },
  {
    slug: "rpa-ml-ai",
    title: "RPA, ML & AI",
    teaser: "Automate workflows and unlock new capabilities with artificial intelligence.",
    description:
      "Automate workflows and unlock new capabilities with AI. We deliver intelligent automation, machine learning models, and generative AI solutions grounded in measurable business value.",
    features: ["Process Automation (RPA)", "ML Model Development", "Generative AI & LLMs", "MLOps & Monitoring"],
    icon: Bot,
  },
]

export const industries: IndustryItem[] = [
  {
    slug: "banking-financial-services",
    title: "Banking & Financial Services",
    emoji: "🏦",
    teaser: "Secure, scalable, and compliant technology for modern finance.",
    description:
      "Accelerate digital transformation in finance with secure, scalable, and compliant technology architectures.",
    challenges: ["Legacy System Modernization", "Regulatory Compliance", "Real-time Fraud Detection", "Data Silos"],
  },
  {
    slug: "communication-media",
    title: "Communication & Media",
    emoji: "📡",
    teaser: "Scalable platforms for content, connectivity, and engagement.",
    description:
      "Deliver content and connectivity at scale with resilient streaming, real-time data, and personalized digital experiences for the communication and media sector.",
    challenges: ["Content Delivery at Scale", "Real-time Personalization", "Network Reliability", "Audience Analytics"],
  },
  {
    slug: "energy-public-utilities",
    title: "Energy & Public Utilities",
    emoji: "⚡",
    teaser: "Smart, reliable infrastructure for the energy transition.",
    description:
      "Modernize grid and utility operations with secure IoT, predictive analytics, and resilient infrastructure that supports the transition to clean energy.",
    challenges: ["Grid Modernization", "Predictive Maintenance", "IoT & Sensor Data", "Regulatory Reporting"],
  },
  {
    slug: "healthcare-life-sciences",
    title: "Healthcare & Life Sciences",
    emoji: "🏥",
    teaser: "Interoperable, compliant systems that improve outcomes.",
    description:
      "Enhance patient outcomes and operational efficiency through advanced data analytics and interoperable systems.",
    challenges: ["HIPAA Compliance", "Interoperability", "Predictive Analytics", "Telehealth Infrastructure"],
  },
  {
    slug: "manufacturing-automotive",
    title: "Manufacturing & Automotive",
    emoji: "🏭",
    teaser: "Connected, data-driven operations from factory to fleet.",
    description:
      "Drive Industry 4.0 outcomes with connected factories, supply chain visibility, and data-driven automation across manufacturing and automotive operations.",
    challenges: ["Smart Factory & IIoT", "Supply Chain Visibility", "Quality Automation", "Predictive Maintenance"],
  },
  {
    slug: "government-solutions",
    title: "Government Solutions",
    emoji: "🏛️",
    teaser: "Secure, compliant modernization for public sector missions.",
    description:
      "Deliver mission outcomes with secure, FedRAMP-aligned cloud, data, and modernization solutions purpose-built for federal, state, and local agencies.",
    challenges: ["FedRAMP & ATO Compliance", "Legacy Modernization", "Citizen Digital Services", "Data Security"],
  },
]

export const getService = (slug: string): ServiceItem | undefined =>
  services.find((s) => s.slug === slug)

export const getIndustry = (slug: string): IndustryItem | undefined =>
  industries.find((i) => i.slug === slug)
