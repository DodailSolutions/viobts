"use client"

import * as React from "react"
import { motion, useInView, animate } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { ArrowRight } from "lucide-react"

function StatCounter({ value, label, suffix = "" }: { value: number, label: string, suffix?: string }) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })

  React.useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate(v) {
          if (ref.current) {
            ref.current.textContent = Math.floor(v).toString() + suffix
          }
        }
      })
      return controls.stop
    }
  }, [inView, value, suffix])

  return (
    <div className="flex flex-col">
      <span ref={ref} className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-brand mb-1">
        0{suffix}
      </span>
      <span className="text-sm font-medium text-text-muted uppercase tracking-wider">{label}</span>
    </div>
  )
}

export function AboutTeaser() {
  return (
    <section className="py-24 relative overflow-hidden bg-primary">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium text-accent tracking-wide uppercase mb-3">About Us</p>
            <h2 className="text-h2 font-display font-bold mb-6 text-text-primary">
              Richmond, Virginia-based.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-brand">Founded by Technologists.</span>
            </h2>
            <p className="text-[0.9375rem] text-text-muted mb-10 leading-relaxed max-w-lg">
              We are a collective of elite engineers, data scientists, and strategists dedicated to architecting the future of your business. With over a decade of experience, we deliver robust, scalable, and secure technology solutions that drive real enterprise value.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-10">
              <StatCounter value={10} suffix="+" label="Years Experience" />
              <StatCounter value={50} suffix="+" label="Enterprise Projects" />
              <StatCounter value={8} suffix="" label="Core Industries" />
              <StatCounter value={100} suffix="+" label="Tech Experts" />
            </div>

            <Button size="lg" className="group">
              Book a Consultation
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Visual Element */}
          <motion.div 
            className="relative h-[500px] w-full hidden lg:block"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 right-[35%] w-[60%] h-[45%] rounded-2xl overflow-hidden border border-border shadow-elevated bg-surface">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center px-6">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-accent/10 flex items-center justify-center">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <p className="text-sm font-medium text-text-muted">Enterprise Architecture</p>
                </div>
              </div>
            </div>
            <div className="absolute top-[20%] right-0 w-[40%] h-[40%] rounded-2xl overflow-hidden border border-border shadow-elevated bg-surface">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center px-6">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-secondary/10 flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <p className="text-sm font-medium text-text-muted">Innovation Lab</p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[5%] right-[15%] w-[65%] h-[35%] rounded-2xl overflow-hidden border border-border shadow-elevated bg-surface">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center px-6">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-accent/10 flex items-center justify-center">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <p className="text-sm font-medium text-text-muted">Collaborative Partnerships</p>
                </div>
              </div>
            </div>
            
            {/* Decorative dots */}
            <div className="absolute top-[10%] left-0 w-20 h-20 bg-accent/[0.06] rounded-full blur-[40px]" />
            <div className="absolute bottom-[20%] right-[5%] w-24 h-24 bg-secondary/[0.06] rounded-full blur-[40px]" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
