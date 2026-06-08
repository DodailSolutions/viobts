import { notFound } from "next/navigation"
import Link from "next/link"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { Card, CardContent } from "@/components/ui/Card"
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"

// Mock Data
const studyData: Record<string, any> = {
  "modernizing-trading-infrastructure": {
    client: "Global Financial Corp",
    title: "Modernizing Legacy Trading Infrastructure",
    industry: "Banking",
    challenge: "The client was operating on a 15-year-old monolithic architecture that experienced severe latency during high-volume trading periods, risking millions in lost revenue and regulatory fines.",
    solution: "VIO BTS architected and deployed a highly available microservices architecture using Go and Rust, orchestrated via Kubernetes on AWS. We implemented a Kafka-based event streaming pipeline for real-time trade processing.",
    results: [
      "99.999% uptime achieved over the last 18 months",
      "P99 latency reduced from 45ms to 2.1ms",
      "Infrastructure costs reduced by 30% through auto-scaling",
      "Zero-downtime deployment pipeline established"
    ]
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  const study = studyData[slug] || {
    client: "Enterprise Client",
    title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    industry: "Technology",
    challenge: "Detailed problem statement coming soon.",
    solution: "Detailed solution architecture coming soon.",
    results: ["Significant performance improvement", "Cost reduction", "Enhanced security posture"]
  }

  return (
    <>
      <article className="pb-24 pt-32 bg-primary relative overflow-hidden border-b border-border">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-brand opacity-5 blur-[150px] pointer-events-none"></div>
        <div className="container px-4 max-w-4xl mx-auto relative z-10">
          <Link href="/case-studies" className="inline-flex items-center text-sm font-medium text-text-muted hover:text-accent transition-colors mb-10">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Case Studies
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <Badge>{study.industry}</Badge>
            <span className="text-sm font-semibold text-text-muted tracking-wider uppercase">{study.client}</span>
          </div>
          
          <h1 className="text-h2 md:text-h1 font-display font-bold mb-10 text-text-primary leading-tight">
            {study.title}
          </h1>
        </div>
      </article>

      <section className="py-24 bg-surface/30">
        <div className="container px-4 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            
            {/* Main Content (2/3 width) */}
            <div className="md:col-span-2 space-y-16">
              <div>
                <h2 className="text-2xl font-display font-bold mb-4 text-text-primary">The Challenge</h2>
                <p className="text-lg text-text-muted leading-relaxed">
                  {study.challenge}
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-display font-bold mb-4 text-text-primary">Our Solution</h2>
                <p className="text-lg text-text-muted leading-relaxed">
                  {study.solution}
                </p>
              </div>
            </div>

            {/* Sidebar (1/3 width) */}
            <div className="md:col-span-1">
              <Card className="bg-surface/50 border-accent/20 sticky top-24">
                <CardContent className="p-8">
                  <h3 className="text-xl font-heading font-semibold mb-6 text-accent">Measurable Results</h3>
                  <ul className="space-y-4">
                    {study.results.map((result: string, i: number) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-text-primary font-medium text-sm leading-relaxed">{result}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-10 pt-8 border-t border-border/50">
                    <p className="text-sm text-text-muted mb-4">Want to achieve similar results for your enterprise?</p>
                    <Button className="w-full group">
                      Let&apos;s Talk <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
