import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { Card, CardContent } from "@/components/ui/Card"
import { ArrowRight, Activity, ShieldCheck, Database } from "lucide-react"
import { getIndustry, industries } from "@/lib/content"

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const industry = getIndustry(slug)

  if (!industry) {
    return { title: "Industry Not Found", robots: { index: false, follow: false } }
  }

  const canonical = `https://www.viobts.com/industries/${industry.slug}`
  return {
    title: industry.title,
    description: industry.description,
    alternates: { canonical },
    openGraph: {
      title: `${industry.title} | VIO BTS`,
      description: industry.description,
      url: canonical,
      type: "website",
    },
  }
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const industry = getIndustry(slug)

  if (!industry) notFound()

  return (
    <>
      <section className="py-24 pt-32 bg-primary relative overflow-hidden border-b border-border">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-brand opacity-10 blur-[150px] pointer-events-none"></div>
        <div className="container px-4">
          <Badge className="mb-6">Industry Focus</Badge>
          <h1 className="text-h1 font-display font-bold mb-6 text-text-primary">
            {industry.title}
          </h1>
          <p className="text-xl text-text-muted max-w-2xl mb-10 leading-relaxed">
            {industry.description}
          </p>
          <Button size="lg" className="group">
            Schedule Strategy Session
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>

      <section className="py-24 bg-surface/30">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">Addressing Core Challenges</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Our engineering teams specialize in solving the most complex issues facing the {industry.title.toLowerCase()} sector today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industry.challenges.map((challenge, i) => (
              <Card key={challenge} className="bg-surface border-border/50">
                <CardContent className="p-6 flex flex-col items-center text-center pt-8">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-accent mb-4">
                    {i % 3 === 0 ? <Activity /> : i % 3 === 1 ? <ShieldCheck /> : <Database />}
                  </div>
                  <h3 className="font-heading font-semibold text-text-primary">{challenge}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
