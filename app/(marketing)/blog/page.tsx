import Link from "next/link"
import { Badge } from "@/components/ui/Badge"
import { Card, CardContent } from "@/components/ui/Card"
import { ArrowRight, Calendar, Clock } from "lucide-react"

// Mock Data for the Blog Index
const posts = [
  {
    title: "Architecting for Scale: Microservices vs Monoliths in 2024",
    slug: "architecting-for-scale",
    excerpt: "An in-depth look at when to break apart your monolith, and when keeping it together is the smarter engineering choice.",
    date: "May 12, 2024",
    readTime: "8 min read",
    category: "Engineering",
  },
  {
    title: "Securing Cloud-Native Data Pipelines",
    slug: "securing-data-pipelines",
    excerpt: "Best practices for implementing zero-trust security models across distributed data architectures.",
    date: "April 28, 2024",
    readTime: "6 min read",
    category: "Security",
  },
  {
    title: "The Future of Enterprise AI Integration",
    slug: "future-enterprise-ai",
    excerpt: "How forward-thinking companies are moving beyond chatbots to integrate LLMs into core business workflows.",
    date: "April 15, 2024",
    readTime: "10 min read",
    category: "AI & ML",
  },
]

export default function BlogPage() {
  return (
    <>
      <section className="py-24 pt-32 bg-primary relative overflow-hidden border-b border-border">
        <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-gradient-brand opacity-10 blur-[150px] pointer-events-none"></div>
        <div className="container px-4 text-center max-w-3xl mx-auto">
          <Badge className="mb-6">Insights</Badge>
          <h1 className="text-h1 font-display font-bold mb-6">Engineering Thoughts</h1>
          <p className="text-xl text-text-muted mb-10 leading-relaxed">
            Deep dives into enterprise architecture, data science, and modern software development from the VIO BTS engineering team.
          </p>
        </div>
      </section>

      <section className="py-24 bg-surface/30">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <Link href={`/blog/${post.slug}`} key={i} className="block group">
                <Card className="h-full border-border/50 hover:border-accent/50 bg-surface/50 group-hover:-translate-y-2 transition-all duration-300">
                  <div className="h-48 w-full bg-primary/80 border-b border-border relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-brand opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    {/* Abstract tech pattern */}
                    <div className="w-full h-full opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                    <div className="absolute bottom-4 left-4">
                      <Badge variant="outline" className="bg-surface/80 backdrop-blur-md">{post.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-xs text-text-muted mb-4 font-medium">
                      <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
                      <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-text-muted text-sm line-clamp-3 mb-6">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-accent text-sm font-semibold mt-auto">
                      Read Article <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
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
