"use client"

import * as React from "react"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card"
import { Code2, HeartPulse, Laptop, GraduationCap, Plane, Coffee, ArrowRight } from "lucide-react"

const benefits = [
  { icon: Laptop, title: "Top-Tier Hardware", desc: "M3 Max MacBooks or equivalent Windows workstations." },
  { icon: HeartPulse, title: "Comprehensive Health", desc: "100% covered premium medical, dental, and vision insurance." },
  { icon: GraduationCap, title: "Continuous Learning", desc: "$5,000 annual stipend for courses, conferences, and certs." },
  { icon: Plane, title: "Unlimited PTO", desc: "We focus on outcomes, not hours logged. Take the time you need." },
  { icon: Code2, title: "Modern Stack", desc: "Work with the latest in Next.js, Rust, Go, and AI tooling." },
  { icon: Coffee, title: "Remote-First", desc: "Work from our Richmond HQ, or from anywhere in the US." },
]

const jobs = [
  { title: "Senior Cloud Architect", department: "Engineering", type: "Full-time", location: "Remote / US" },
  { title: "Data Scientist (NLP)", department: "AI & ML", type: "Full-time", location: "Richmond, VA" },
  { title: "Frontend Engineer (React/Next)", department: "Engineering", type: "Full-time", location: "Remote / US" },
  { title: "Technical Project Manager", department: "Delivery", type: "Full-time", location: "Richmond, VA" },
]

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 pt-32 bg-surface/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-secondary opacity-10 blur-[150px] pointer-events-none"></div>
        <div className="container px-4 text-center max-w-3xl mx-auto">
          <Badge className="mb-6" variant="outline">Join the Team</Badge>
          <h1 className="text-h1 font-display font-bold mb-6">Build the Future of Enterprise Tech</h1>
          <p className="text-xl text-text-muted mb-10 leading-relaxed">
            We are always looking for elite engineers and strategic thinkers who are passionate about solving complex, high-stakes problems.
          </p>
          <Button size="lg" className="px-8">View Open Roles</Button>
        </div>
      </section>

      {/* Culture */}
      <section className="py-24 bg-primary border-y border-border">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold mb-6">Our Engineering Culture</h2>
              <div className="space-y-6 text-text-muted text-lg leading-relaxed">
                <p>
                  At VIO BTS, we believe that the best code is written by autonomous, empowered teams. We don&apos;t do micromanagement or arbitrary deadlines. Instead, we foster a culture of extreme ownership and peer review.
                </p>
                <p>
                  We value psychological safety—meaning you can propose radical new architectures, respectfully debate technical decisions, and fail forward without fear.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-48 rounded-xl bg-surface/80 border border-border flex items-center justify-center p-4 text-center group hover:border-accent transition-colors">
                <span className="font-heading font-semibold group-hover:text-accent transition-colors">No Red Tape</span>
              </div>
              <div className="h-48 rounded-xl bg-gradient-brand flex items-center justify-center p-4 text-center text-primary translate-y-8">
                <span className="font-heading font-semibold">Code Wins Arguments</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-24 bg-surface/30">
        <div className="container px-4">
          <h2 className="text-3xl font-display font-bold mb-16 text-center">Perks & Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon
              return (
                <Card key={i} className="bg-surface border-border/50">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary border border-border flex items-center justify-center mb-4 text-accent">
                      <Icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-text-muted text-sm">{benefit.desc}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-24 bg-primary relative" id="open-roles">
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-brand opacity-5 blur-[150px] pointer-events-none"></div>
        <div className="container px-4 max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl font-display font-bold mb-12">Open Positions</h2>
          <div className="space-y-4">
            {jobs.map((job, i) => (
              <div key={i} className="group p-6 rounded-xl border border-border bg-surface/50 hover:bg-surface hover:border-accent/50 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between cursor-pointer">
                <div className="mb-4 sm:mb-0">
                  <h3 className="text-xl font-heading font-semibold text-text-primary group-hover:text-accent transition-colors mb-2">
                    {job.title}
                  </h3>
                  <div className="flex gap-3 text-sm text-text-muted">
                    <span>{job.department}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                  </div>
                </div>
                <Button variant="outline" className="group-hover:bg-accent group-hover:text-primary group-hover:border-accent">
                  Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-text-muted">
              Don&apos;t see a fit? Send your resume to <a href="mailto:careers@viobts.com" className="text-accent hover:underline">careers@viobts.com</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
