import { IndustriesPreview } from "@/components/sections/IndustriesPreview"
import { CTABanner } from "@/components/sections/CTABanner"

export const metadata = {
  title: 'Industries We Serve',
  description: 'Domain-specific expertise combined with cutting-edge technology solutions.',
}

export default function IndustriesPage() {
  return (
    <>
      <section className="py-24 pt-32 bg-surface/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-gradient-brand opacity-10 blur-[150px] pointer-events-none"></div>
        <div className="container px-4 text-center">
          <h1 className="text-h1 font-display font-bold mb-6">Industries</h1>
          <p className="text-body text-text-muted max-w-2xl mx-auto">
            We partner with industry leaders to deliver specialized technology solutions that drive competitive advantage and operational efficiency.
          </p>
        </div>
      </section>

      <IndustriesPreview />
      
      <CTABanner />
    </>
  )
}
