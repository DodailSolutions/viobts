"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { BarChart3, Search, TrendingUp } from "lucide-react"

const steps = [
  {
    title: "Measure",
    description: "We establish a baseline by auditing your current infrastructure, workflows, and data pipelines.",
    icon: BarChart3,
  },
  {
    title: "Analyze",
    description: "Our engineers identify bottlenecks, security gaps, and opportunities for automation or cloud optimization.",
    icon: Search,
  },
  {
    title: "Improve",
    description: "We architect and deploy scalable solutions that drive measurable business transformation.",
    icon: TrendingUp,
  },
]

export function Methodology() {
  return (
    <section className="py-24 relative z-10 bg-surface">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-20">
          <p className="text-sm font-medium text-accent tracking-wide uppercase mb-3">How We Work</p>
          <h2 className="text-h2 font-display font-bold text-text-primary">
            Our Methodology
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-14 left-[15%] right-[15%] h-px bg-border z-0">
            <motion.div 
              className="h-full bg-gradient-brand"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div 
                  key={index}
                  className="flex flex-col items-center text-center group"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                >
                  <div className="w-28 h-28 rounded-full bg-primary border-4 border-surface flex items-center justify-center mb-6 shadow-card transition-all duration-300 group-hover:shadow-elevated relative">
                    <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-gradient-brand flex items-center justify-center text-primary font-bold text-sm shadow-sm">
                      {index + 1}
                    </div>
                    <Icon className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed text-sm max-w-[280px]">
                    {step.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
