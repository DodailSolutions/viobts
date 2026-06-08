"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { industries } from "@/lib/content"

export function IndustriesPreview() {
  return (
    <section className="py-24 relative z-10 bg-primary">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-sm font-medium text-accent tracking-wide uppercase mb-3">Sectors</p>
          <h2 className="text-h2 font-display font-bold text-text-primary mb-4">
            Industries We Empower
          </h2>
          <p className="text-text-muted max-w-xl">
            Domain-specific expertise combined with cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Link href={`/industries/${industry.slug}`} className="block h-52 group relative overflow-hidden rounded-2xl border border-border bg-surface hover:border-accent/30 hover:shadow-elevated transition-all duration-300">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-accent/[0.04] group-hover:to-accent/[0.08] transition-all duration-500" />
                
                {/* Content */}
                <div className="absolute inset-0 z-10 flex flex-col justify-between p-6">
                  <span className="text-3xl">{industry.emoji}</span>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-text-primary mb-1 group-hover:text-accent transition-colors duration-200">
                      {industry.title}
                    </h3>
                    <div className="flex items-center text-accent opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <span className="text-sm font-medium mr-1.5">Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
