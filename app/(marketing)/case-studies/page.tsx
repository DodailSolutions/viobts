import Link from "next/link"
import { Badge } from "@/components/ui/Badge"
import { Card, CardContent } from "@/components/ui/Card"
import { ArrowRight, BarChart3 } from "lucide-react"

// Mock Data for Case Studies
const cases = [
  {
    client: "Global Financial Corp",
    title: "Modernizing Legacy Trading Infrastructure",
    slug: "modernizing-trading-infrastructure",
    industry: "Banking",
    metric: "99.999% Uptime Achieved",
  },
  {
    client: "National Health Network",
    title: "HIPAA-Compliant Data Lake Implementation",
    slug: "hipaa-data-lake",
    industry: "Healthcare",
    metric: "40% Cost Reduction",
  },
  {
    client: "Logistics Prime",
    title: "AI-Driven Supply Chain Optimization",
    slug: "ai-supply-chain",
    industry: "Logistics",
    metric: "2.5x Faster Delivery Routing",
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      <section className="py-24 pt-32 bg-surface/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-accent opacity-10 blur-[150px] pointer-events-none"></div>
        <div className="container px-4 text-center max-w-3xl mx-auto">
          <Badge className="mb-6">Case Studies</Badge>
          <h1 className="text-h1 font-display font-bold mb-6">Proven Enterprise Results</h1>
          <p className="text-xl text-text-muted mb-10 leading-relaxed">
            See how we have partnered with industry leaders to overcome complex technical challenges and deliver measurable business value.
          </p>
        </div>
      </section>

      <section className="py-24 bg-primary border-t border-border">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cases.map((study, i) => (
              <Link href={`/case-studies/${study.slug}`} key={i} className="block group">
                <Card className="h-full border-border/50 hover:border-accent/50 bg-surface/30 group-hover:-translate-y-2 transition-all duration-300 overflow-hidden relative">
                  
                  {/* Decorative Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-surface to-primary z-0"></div>
                  <div className="absolute -right-20 -top-20 w-64 h-64 bg-gradient-brand opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full blur-[50px] z-0"></div>

                  <CardContent className="p-10 relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-16">
                      <Badge variant="outline" className="border-accent/30 text-accent bg-accent/5">
                        {study.industry}
                      </Badge>
                      <div className="flex items-center text-success bg-success/10 px-3 py-1 rounded-full text-xs font-bold">
                        <BarChart3 className="w-3 h-3 mr-1.5" />
                        {study.metric}
                      </div>
                    </div>

                    <div className="mt-auto">
                      <p className="text-sm font-medium text-text-muted mb-2 tracking-wider uppercase">{study.client}</p>
                      <h3 className="text-2xl font-display font-bold text-text-primary mb-6 group-hover:text-accent transition-colors">
                        {study.title}
                      </h3>
                      <div className="flex items-center text-text-primary text-sm font-semibold">
                        Read Case Study <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
