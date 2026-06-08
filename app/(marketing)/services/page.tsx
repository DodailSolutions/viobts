import { ServicesGrid } from "@/components/sections/ServicesGrid"
import { CTABanner } from "@/components/sections/CTABanner"
import { Methodology } from "@/components/sections/Methodology"

export const metadata = {
  title: 'Our Services',
  description: 'Comprehensive technology solutions tailored to accelerate your enterprise growth.',
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 pt-32 bg-surface/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-gradient-brand opacity-10 blur-[150px] pointer-events-none"></div>
        <div className="container px-4 text-center">
          <h1 className="text-h1 font-display font-bold mb-6">Our Services</h1>
          <p className="text-body text-text-muted max-w-2xl mx-auto">
            From team augmentation to complex data pipelines, we provide the expertise needed to scale your operations.
          </p>
        </div>
      </section>

      {/* Grid - Reusing the section */}
      <ServicesGrid />

      {/* Process */}
      <Methodology />

      {/* CTA */}
      <CTABanner />
    </>
  )
}
