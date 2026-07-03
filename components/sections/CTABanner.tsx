"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Phone } from "lucide-react"

export function CTABanner() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] z-0" />
      
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 z-[1] opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />
      
      {/* Accent glow */}
      <div className="absolute -top-20 right-[20%] w-[300px] h-[300px] rounded-full bg-accent/10 blur-[120px] z-[1]" />

      <div className="container relative z-10">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center md:text-left max-w-xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-white/70 font-medium">
              Schedule a strategy session with our lead architects.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            {/* Custom button — NOT using Button component to avoid variant override */}
            <a
              href="/contact-us"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-8 text-[0.9375rem] font-semibold text-[#0F172A] shadow-lg transition-all duration-200 hover:bg-[#F1F5F9] hover:shadow-xl active:scale-[0.98] group"
            >
              Book Consultation
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+18048216588"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-white/30 px-6 text-[0.9375rem] font-medium text-white transition-all duration-200 hover:bg-white/10 hover:border-white/50 active:scale-[0.98]"
            >
              <Phone className="mr-2 w-4 h-4" />
              +1 804 821 6588
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
