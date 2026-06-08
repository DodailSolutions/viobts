import { notFound } from "next/navigation"
import Link from "next/link"
import { Badge } from "@/components/ui/Badge"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"

// Mock Data for individual posts
const postData: Record<string, any> = {
  "architecting-for-scale": {
    title: "Architecting for Scale: Microservices vs Monoliths in 2024",
    date: "May 12, 2024",
    readTime: "8 min read",
    category: "Engineering",
    author: "Michael Chen, CTO",
    content: `
      <p>The debate between microservices and monoliths is as old as distributed computing itself. However, as we move through 2024, the pendulum has started to swing back from the "microservices everywhere" mantra of the late 2010s.</p>
      
      <h2>The Majestic Monolith is Back</h2>
      <p>Many organizations rushed into microservices only to discover they had built a distributed monolith. They inherited all the latency, operational complexity, and debugging nightmares of microservices without gaining independent deployability.</p>
      
      <h3>When to Choose Microservices</h3>
      <ul>
        <li>You have multiple teams working on the same codebase and stepping on each other's toes.</li>
        <li>Different parts of your application have vastly different scaling requirements.</li>
        <li>You have strict compliance requirements that require physical isolation of certain components.</li>
      </ul>
      
      <p>At VIO BTS, we advocate for a pragmatic approach: start modular, extract when painful. We build "modular monoliths" that enforce strict boundaries internally, making it trivial to extract a microservice later if business needs dictate it.</p>
    `
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  const post = postData[slug] || {
    title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    date: "Recent",
    readTime: "5 min read",
    category: "Technology",
    author: "VIO BTS Engineering",
    content: "<p>Detailed article content goes here. This will be populated by Payload CMS Lexical Editor.</p>"
  }

  return (
    <>
      <article className="pb-24 pt-32 bg-primary relative overflow-hidden">
        {/* Header Background */}
        <div className="absolute top-0 right-0 w-full h-[600px] bg-gradient-to-b from-surface/80 to-primary z-0"></div>
        <div className="absolute top-0 right-1/4 w-1/2 h-[400px] bg-gradient-brand opacity-10 blur-[120px] pointer-events-none z-0"></div>

        <div className="container px-4 max-w-3xl mx-auto relative z-10">
          <Link href="/blog" className="inline-flex items-center text-sm font-medium text-text-muted hover:text-accent transition-colors mb-10">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
          </Link>

          <Badge className="mb-6">{post.category}</Badge>
          
          <h1 className="text-h2 md:text-h1 font-display font-bold mb-6 text-text-primary leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-text-muted mb-12 border-b border-border/50 pb-8">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gradient-brand flex items-center justify-center text-primary font-bold mr-3">
                {post.author.charAt(0)}
              </div>
              <span className="font-semibold text-text-primary">{post.author}</span>
            </div>
            <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> {post.date}</span>
            <span className="flex items-center"><Clock className="w-4 h-4 mr-2" /> {post.readTime}</span>
            
            <button className="ml-auto flex items-center hover:text-accent transition-colors">
              <Share2 className="w-4 h-4 mr-2" /> Share
            </button>
          </div>

          {/* CMS Content Area */}
          <div 
            className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-accent hover:prose-a:text-accent/80 prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </>
  )
}
