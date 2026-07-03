"use client"

import * as React from "react"
import Image from "next/image"
import { motion, useMotionValue, useTransform, useSpring, animate } from "framer-motion"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { ArrowRight, Shield, Zap, Globe, ChevronRight } from "lucide-react"

/* ─── Animated counter ─── */
function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const [hasAnimated, setHasAnimated] = React.useState(false)
  
  React.useEffect(() => {
    if (!hasAnimated) {
      const timer = setTimeout(() => {
        animate(0, target, {
          duration: 2.5,
          ease: [0.16, 1, 0.3, 1],
          onUpdate(v) {
            if (ref.current) ref.current.textContent = Math.floor(v) + suffix
          },
        })
        setHasAnimated(true)
      }, 800)
      return () => clearTimeout(timer)
    }
  }, [target, suffix, hasAnimated])

  return <span ref={ref} className="tabular-nums">0{suffix}</span>
}

/* ─── Floating feature pill ─── */
function FloatingPill({ icon: Icon, label, delay, className }: { icon: React.ElementType; label: string; delay: number; className?: string }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 200, damping: 20 }}
    >
      <motion.div
        className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 shadow-elevated border border-[#E2E8F0] cursor-pointer"
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 4 + Math.random() * 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        whileHover={{ scale: 1.05, y: -4, borderColor: "#1c45c8", boxShadow: "var(--shadow-glow-cyan)" }}
      >
        <div className="w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
          <Icon className="w-3.5 h-3.5 text-accent" />
        </div>
        <span className="text-xs font-semibold text-[#0F172A] whitespace-nowrap">{label}</span>
      </motion.div>
    </motion.div>
  )
}

function TrustLogo({ client, index }: { client: { name: string, logo: string }, index: number }) {
  return (
    <motion.div
      className="flex items-center justify-center h-8 sm:h-10 md:h-12 shrink-0"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 + index * 0.1, ease: "easeOut" }}
      whileHover={{ scale: 1.08, y: -3 }}
    >
      <Image
        src={client.logo}
        alt={`${client.name} logo`}
        width={120}
        height={40}
        className="h-5 sm:h-6 md:h-7 lg:h-8 w-auto object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
      />
    </motion.div>
  )
}

export function HeroSection() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 })
  const orbX = useTransform(smoothX, [0, 1], [-15, 15])
  const orbY = useTransform(smoothY, [0, 1], [-15, 15])

  function handleMouseMove(e: React.MouseEvent) {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width)
    mouseY.set((e.clientY - rect.top) / rect.height)
  }

  return (
    <section
      className="relative min-h-[100svh] flex flex-col overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* ─── Background Layers ─── */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-white to-white" />
        
        {/* Interactive accent orbs */}
        <motion.div
          className="absolute top-[10%] right-[15%] w-[400px] h-[400px] rounded-full"
          style={{
            x: orbX,
            y: orbY,
            background: "radial-gradient(circle, rgba(28, 69, 200, 0.08) 0%, transparent 70%)",
          }}
        />
        <motion.div
          className="absolute bottom-[20%] left-[10%] w-[350px] h-[350px] rounded-full"
          style={{
            x: useTransform(orbX, v => -v * 0.7),
            y: useTransform(orbY, v => -v * 0.7),
            background: "radial-gradient(circle, rgba(124, 58, 237, 0.06) 0%, transparent 70%)",
          }}
        />

        {/* Precision grid */}
        <div className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.025) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.025) 1px, transparent 1px)
            `,
            backgroundSize: '72px 72px',
          }}
        />
        
        {/* Radial fade at edges */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 40%, white 100%)"
        }} />
      </div>

      {/* ─── Main Content ─── */}
      <div className="container relative z-10 flex flex-1 flex-col items-center justify-center text-center max-w-4xl pt-24 pb-16 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Badge className="mb-8 text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#059669] mr-2 animate-pulse" />
            Enterprise Technology Partner
          </Badge>
        </motion.div>

        <motion.h1
          className="font-display font-bold mb-6 tracking-[-0.03em] text-[#0F172A] leading-[1.08]"
          style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We Engineer
          <br />
          <span className="relative inline-block">
            <span className="relative z-10 text-transparent bg-clip-text" style={{
              backgroundImage: "linear-gradient(135deg, #1c45c8 0%, #7C3AED 50%, #1c45c8 100%)",
              backgroundSize: "200% auto",
              animation: "gradient-shift 4s ease infinite",
            }}>
              Digital Acceleration
            </span>
            {/* Underline accent */}
            <motion.div 
              className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full"
              style={{ backgroundImage: "linear-gradient(135deg, #1c45c8, #7C3AED)" }}
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-[#64748B] mb-10 max-w-2xl leading-relaxed font-normal"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          Enterprise-grade cloud, data, and AI solutions designed to scale your operations and drive measurable business transformation.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto mb-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
            <Button size="lg" className="relative overflow-hidden w-full sm:w-auto group text-[0.9375rem] font-semibold px-8 h-13 shine-effect">
              <span className="relative z-10 flex items-center justify-center">
                Book a Free Consultation
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-[0.9375rem] h-13 group">
              <span className="relative z-10 flex items-center justify-center">
                View Case Studies
                <ChevronRight className="ml-1.5 w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Micro social proof */}
        <motion.p
          className="text-xs text-[#94A3B8] mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Trusted by 50+ enterprises · FedRAMP & SOC 2 compliant
        </motion.p>
      </div>

      {/* ─── Floating Feature Pills (Desktop Only) ─── */}
      <div className="hidden lg:block">
        <FloatingPill icon={Shield} label="FedRAMP Authorized" delay={1.0} className="top-[28%] left-[6%]" />
        <FloatingPill icon={Zap} label="99.9% SLA Uptime" delay={1.2} className="top-[22%] right-[6%]" />
        <FloatingPill icon={Globe} label="Multi-Cloud Strategy" delay={1.4} className="bottom-[28%] left-[8%]" />
        
        {/* Animated stat card */}
        <motion.div
          className="absolute bottom-[26%] right-[6%]"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.6, type: "spring", stiffness: 200, damping: 20 }}
        >
          <motion.div
            className="bg-white rounded-2xl border border-[#E2E8F0] shadow-elevated px-5 py-4 min-w-[160px] cursor-pointer"
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{ scale: 1.05, y: -4, borderColor: "#7C3AED", boxShadow: "var(--shadow-glow-purple)" }}
          >
            <p className="text-[10px] font-medium text-[#94A3B8] uppercase tracking-wider mb-1">Projects Delivered</p>
            <p className="text-3xl font-display font-bold text-[#0F172A]">
              <AnimatedNumber target={50} suffix="+" />
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* ─── Bottom Trust Bar (in normal flow — pinned to section bottom via flex) ─── */}
      <motion.div
        className="relative mt-auto w-full z-10 border-t border-[#E2E8F0] bg-white/80 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <div className="container py-4 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10">
          <p className="text-[10px] text-[#94A3B8] uppercase tracking-[0.15em] font-bold shrink-0">
            Trusted By
          </p>
          <div className="flex flex-nowrap items-center justify-center gap-5 sm:gap-8 md:gap-10 lg:gap-12 overflow-x-auto no-scrollbar w-full md:w-auto">
            {[
              { name: 'Wells Fargo', logo: '/images/clients/wells-fargo.png' },
              { name: 'FDA', logo: '/images/clients/fda.png' },
              { name: 'USAID', logo: '/images/clients/usaid.png' },
              { name: 'Capital One', logo: '/images/clients/capital-one.png' },
              { name: 'Merck', logo: '/images/clients/merck.png' }
            ].map((client, i) => (
              <TrustLogo key={i} client={client} index={i} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
