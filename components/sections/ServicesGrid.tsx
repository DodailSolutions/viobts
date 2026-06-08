"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { services } from "@/lib/content"

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
}

export function ServicesGrid() {
  return (
    <section className="py-24 relative z-10 bg-surface">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-sm font-medium text-accent tracking-wide uppercase mb-3">What We Do</p>
          <h2 className="text-h2 font-display font-bold mb-4 text-text-primary">
            Our Core Services
          </h2>
          <p className="text-text-muted max-w-xl">
            Comprehensive technology solutions tailored to accelerate your enterprise growth.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div key={service.slug} variants={itemVariants}>
                <Link href={`/services/${service.slug}`} className="block h-full">
                  <Card className="h-full group cursor-pointer hover:border-accent/30 bg-primary">
                    <CardHeader>
                      <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/15 transition-all duration-300">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <CardTitle className="flex items-center justify-between">
                        {service.title}
                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-accent" />
                      </CardTitle>
                      <CardDescription className="text-[0.9375rem] mt-2">
                        {service.teaser}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        <div className="mt-14 flex justify-center">
          <Button size="lg" className="px-8">
            Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  )
}
