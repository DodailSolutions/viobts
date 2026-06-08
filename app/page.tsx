import { HeroSection } from "@/components/sections/HeroSection"
import { ServicesGrid } from "@/components/sections/ServicesGrid"
import { ClientMarquee } from "@/components/sections/ClientMarquee"
import { Testimonials } from "@/components/sections/Testimonials"
import { AboutTeaser } from "@/components/sections/AboutTeaser"
import { ValuesGrid } from "@/components/sections/ValuesGrid"
import { IndustriesPreview } from "@/components/sections/IndustriesPreview"
import { Methodology } from "@/components/sections/Methodology"
import { CTABanner } from "@/components/sections/CTABanner"
import { NewsletterForm } from "@/components/sections/NewsletterForm"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <ClientMarquee />
      <Testimonials />
      <AboutTeaser />
      <ValuesGrid />
      <IndustriesPreview />
      <Methodology />
      <CTABanner />
      <NewsletterForm />
    </>
  )
}
