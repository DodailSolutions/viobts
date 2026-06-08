"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"
import { Shield, Lightbulb, Zap, Users, Target, Lock, TrendingUp } from "lucide-react"

const values = [
  {
    title: "Innovation First",
    description: "We constantly push the boundaries of what's possible with modern technology.",
    icon: Lightbulb,
    accent: "bg-amber-500/10 text-amber-600",
  },
  {
    title: "Uncompromising Security",
    description: "Security is built into our foundation, not bolted on as an afterthought.",
    icon: Shield,
    accent: "bg-accent/10 text-accent",
  },
  {
    title: "Agile Delivery",
    description: "Rapid iteration and deployment for faster time-to-market.",
    icon: Zap,
    accent: "bg-violet-500/10 text-violet-600",
  },
  {
    title: "Collaborative Partnership",
    description: "We work as an extension of your internal team.",
    icon: Users,
    accent: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "Results-Driven",
    description: "Every line of code is written to achieve measurable business outcomes.",
    icon: Target,
    accent: "bg-emerald-500/10 text-emerald-600",
  },
  {
    title: "Data Privacy",
    description: "Strict adherence to global data privacy and compliance standards.",
    icon: Lock,
    accent: "bg-rose-500/10 text-rose-600",
  },
  {
    title: "Continuous Growth",
    description: "We invest heavily in the ongoing education of our engineers.",
    icon: TrendingUp,
    accent: "bg-accent/10 text-accent",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
}

export function ValuesGrid() {
  return (
    <section className="py-24 relative z-10 bg-surface">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-sm font-medium text-accent tracking-wide uppercase mb-3">Our DNA</p>
          <h2 className="text-h2 font-display font-bold text-text-primary mb-4">
            Our Core Values
          </h2>
          <p className="text-text-muted max-w-xl">
            The principles that guide our engineering practices and client relationships.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {values.map((value, index) => {
            const Icon = value.icon
            const isFeatured = index === 0
            
            return (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className={isFeatured ? "lg:col-span-2" : ""}
              >
                <Card className={`h-full group hover:border-accent/20 bg-primary ${isFeatured ? "bg-gradient-to-br from-primary to-surface" : ""}`}>
                  <CardHeader className="h-full justify-center">
                    <div className={`w-10 h-10 rounded-xl ${value.accent} flex items-center justify-center mb-4 transition-all duration-300`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <CardTitle className={isFeatured ? "text-2xl" : "text-lg"}>
                      {value.title}
                    </CardTitle>
                    <CardDescription className="mt-2">
                      {value.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
