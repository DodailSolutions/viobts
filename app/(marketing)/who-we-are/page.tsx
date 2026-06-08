"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/Badge"
import { Card, CardContent } from "@/components/ui/Card"
import { MapPin, Target, Trophy, Users } from "lucide-react"

const timeline = [
  { year: "2013", title: "Inception", description: "VIO BTS was founded in Richmond, Virginia by a core team of senior enterprise architects." },
  { year: "2016", title: "Enterprise Scaling", description: "Secured our first Fortune 500 client and expanded the engineering workforce." },
  { year: "2019", title: "Data & Cloud Division", description: "Launched specialized practices in Big Data Analytics and Cloud Native Architecture." },
  { year: "2023", title: "AI Integration", description: "Integrated ML and AI capabilities into our core enterprise transformation offerings." },
]

const leaders = [
  { name: "Sarah Jenkins", role: "Chief Executive Officer", initials: "SJ" },
  { name: "Michael Chen", role: "Chief Technology Officer", initials: "MC" },
  { name: "David O'Connor", role: "VP of Engineering", initials: "DO" },
  { name: "Priya Sharma", role: "Head of Data Science", initials: "PS" },
]

export default function WhoWeArePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24 pt-32 bg-primary relative overflow-hidden border-b border-border">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-brand opacity-10 blur-[150px] pointer-events-none"></div>
        <div className="container px-4 text-center max-w-4xl mx-auto">
          <Badge className="mb-6">Who We Are</Badge>
          <h1 className="text-h1 font-display font-bold mb-6 text-text-primary">
            Engineering Excellence, <br/> Driven by Purpose.
          </h1>
          <p className="text-xl text-text-muted mb-10 leading-relaxed">
            We are a collective of elite technologists, data scientists, and strategists headquartered in Richmond, Virginia. For over a decade, we have been the silent engine behind some of the most complex enterprise digital transformations.
          </p>
        </div>
      </section>

      {/* Stats/Mission */}
      <section className="py-20 bg-surface/30">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 text-center">
            <div className="p-8">
              <Trophy className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-4xl font-display font-bold text-text-primary mb-2">10+</h3>
              <p className="text-text-muted">Years of Excellence</p>
            </div>
            <div className="p-8 border-y md:border-y-0 md:border-x border-border/50">
              <Users className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-4xl font-display font-bold text-text-primary mb-2">100+</h3>
              <p className="text-text-muted">Elite Engineers</p>
            </div>
            <div className="p-8">
              <Target className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-4xl font-display font-bold text-text-primary mb-2">98%</h3>
              <p className="text-text-muted">Client Retention Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-primary relative">
        <div className="container px-4 max-w-5xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-16 text-center">Our Journey</h2>
          <div className="relative border-l border-border/50 ml-6 md:ml-1/2 md:left-1/2">
            {timeline.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative mb-12 w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'ml-8 md:mr-auto md:ml-0 md:pr-8 md:text-right' : 'ml-8 md:ml-auto md:pl-8'}`}
              >
                {/* Timeline Dot */}
                <div className={`absolute top-0 w-4 h-4 rounded-full bg-accent shadow-glow-cyan -left-[2.35rem] md:${i % 2 === 0 ? '-right-[2.35rem] left-auto' : '-left-[2.35rem]'}`}></div>
                
                <h3 className="text-xl font-bold text-accent mb-2">{item.year}</h3>
                <h4 className="text-lg font-heading font-semibold text-text-primary mb-2">{item.title}</h4>
                <p className="text-text-muted">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-surface/30">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">Leadership Team</h2>
            <p className="text-text-muted">Guided by industry veterans with deep enterprise experience.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leaders.map((leader, i) => (
              <Card key={i} className="bg-surface border-border/50 text-center">
                <CardContent className="p-8 pt-10">
                  <div className="w-24 h-24 rounded-full bg-gradient-brand mx-auto mb-6 flex items-center justify-center font-display font-bold text-3xl text-primary shadow-lg">
                    {leader.initials}
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-text-primary mb-1">{leader.name}</h3>
                  <p className="text-sm text-text-muted">{leader.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24 bg-primary border-t border-border">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-12">Global Footprint, Local Expertise</h2>
          <div className="max-w-4xl mx-auto h-96 rounded-2xl bg-surface/50 border border-border flex items-center justify-center relative overflow-hidden">
            {/* Abstract Map Background Placeholder */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent via-primary to-primary"></div>
            <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-center bg-contain opacity-20 filter invert"></div>
            
            {/* Headquarters Pin */}
            <div className="relative z-10 flex flex-col items-center group cursor-pointer -mt-10">
              <div className="w-4 h-4 bg-accent rounded-full mb-2 animate-pulse shadow-glow-cyan"></div>
              <div className="bg-surface border border-border px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="font-bold text-text-primary text-sm flex items-center">
                  <MapPin className="w-3 h-3 mr-1 text-accent" /> Richmond, VA
                </p>
                <p className="text-xs text-text-muted">Global Headquarters</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
