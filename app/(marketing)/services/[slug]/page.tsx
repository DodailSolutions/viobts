import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { Card, CardContent } from "@/components/ui/Card"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { getService, services } from "@/lib/content"

// Pre-render every known service at build time for fast, SEO-friendly static pages.
export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)

  if (!service) {
    return { title: "Service Not Found", robots: { index: false, follow: false } }
  }

  const canonical = `https://www.viobts.com/services/${service.slug}`
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical },
    openGraph: {
      title: `${service.title} | VIO BTS`,
      description: service.description,
      url: canonical,
      type: "website",
    },
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getService(slug)

  if (!service) notFound()

  return (
    <>
      <section className="py-24 pt-32 bg-primary relative overflow-hidden border-b border-border">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-brand opacity-10 blur-[150px] pointer-events-none"></div>
        <div className="container px-4">
          <Badge className="mb-6">Our Services</Badge>
          <h1 className="text-h1 font-display font-bold mb-6 text-text-primary">
            {service.title}
          </h1>
          <p className="text-xl text-text-muted max-w-2xl mb-10 leading-relaxed">
            {service.description}
          </p>
          <Button size="lg" className="group">
            Discuss Your Project
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>

      <section className="py-24 bg-surface/30">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-display font-bold mb-6 text-text-primary">Overview</h2>
              <div className="prose prose-lg max-w-none text-text-muted">
                <p>
                  In today&apos;s fast-paced digital landscape, having the right technological foundation is not just an advantage; it&apos;s a necessity. Our {service.title} services are designed to integrate seamlessly with your existing operations while providing the scalability and security required by modern enterprises.
                </p>
                <p className="mt-4">
                  We leverage industry best practices, agile methodologies, and our deep expertise to deliver solutions that are not only effective but future-proof.
                </p>
              </div>
            </div>
            <div>
              <Card className="bg-surface/50 border-border/50">
                <CardContent className="p-8">
                  <h3 className="text-xl font-heading font-semibold mb-6">Key Capabilities</h3>
                  <ul className="space-y-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-text-primary font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
