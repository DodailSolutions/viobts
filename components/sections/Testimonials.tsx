"use client"

import * as React from "react"
import Image from "next/image"
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react"

// Testimonials copied verbatim from https://www.viobts.com/
const testimonials = [
  {
    name: "Adithya Buddhavarapu",
    title: "FOUNDER & CEO/CTO",
    company: "FocalCXM",
    quote: "VIO exceeds expectations as a strategic partner, empowering businesses with transformative data science and analytics solutions. Their expertise in delivering complex, enterprise-wide data transformations with precision, security, and innovation sets a new industry standard. VIO recently led a successful implementation with a large pharmaceutical client, modernizing their data ecosystem to drive advanced analytics, regulatory compliance, and operational efficiency. If you're looking for a trusted partner to optimize your data strategy, VIO's unique blend of agility, deep industry expertise, and personalized service ensures data-driven success.",
    initials: "AB",
    photo: "/images/hero/section-3.png",
    linkedIn: "https://www.linkedin.com",
  },
  {
    name: "Vamsi Madabhushi",
    title: "PRODUCT MANAGER",
    company: "Walmart Global Tech",
    quote: "VIO has been a strategic partner in enhancing our omnichannel catalog capabilities, which played a critical role in successfully launching our assortment expansion through marketplace sellers. Their expertise and innovative solutions helped us streamline our operations, improve customer experience, and drive business growth.",
    initials: "VM",
    photo: "/images/hero/technology.png",
    linkedIn: "https://www.linkedin.com",
  },
  {
    name: "Prabhu Chandrasekhar",
    title: "TECHNOLOGY EXECUTIVE",
    company: "Advance Auto Parts",
    quote: "SENIOR IT EXECUTIVE | TRANSFORMATIONAL & STRATEGIC THINKING | ENGAGING | LEADERSHIP | FINANCIAL EFFICIENCY | DIGITAL DATA & ANALYTICS | DATA MANAGEMENT AND GOVERNANCE",
    initials: "PC",
    photo: "/images/hero/prabhu.png",
    linkedIn: "https://www.linkedin.com",
  },
]

function TestimonialSlide({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="w-full rounded-2xl border border-border/60 bg-gradient-to-r from-[#EFF6FF] via-white to-[#F5F3FF] p-2 shadow-card">
      <div className="flex flex-col md:flex-row gap-0 rounded-xl overflow-hidden">
        {/* Left — Video / Photo Panel */}
        <div className="relative w-full md:w-[420px] shrink-0 aspect-[4/3] md:aspect-auto md:min-h-[320px] rounded-xl overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] group">
          {testimonial.photo ? (
            /* Real designed photo panel (name/title/company baked in) */
            <Image
              src={testimonial.photo}
              alt={`${testimonial.name}, ${testimonial.title} at ${testimonial.company}`}
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-contain"
            />
          ) : (
            <>
              {/* Decorative lines */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-20 pointer-events-none">
                <div className="absolute top-4 right-4 w-full h-px bg-gradient-to-l from-accent/60 to-transparent" />
                <div className="absolute top-8 right-0 w-3/4 h-px bg-gradient-to-l from-accent/40 to-transparent" />
                <div className="absolute top-12 right-2 w-1/2 h-px bg-gradient-to-l from-accent/30 to-transparent" />
              </div>

              {/* Person avatar placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center">
                  <span className="text-4xl md:text-5xl font-display font-bold text-white/70">{testimonial.initials}</span>
                </div>
              </div>

              {/* Title badge — left side */}
              <div className="absolute left-5 bottom-20 md:bottom-24 space-y-1">
                <p className="text-lg md:text-xl font-display font-bold text-white leading-tight tracking-wide">
                  {testimonial.title.split(' ').map((word, i) => (
                    <React.Fragment key={i}>
                      {word}<br />
                    </React.Fragment>
                  ))}
                </p>
              </div>

              {/* Company badge */}
              <div className="absolute left-5 bottom-12 md:bottom-14">
                <div className="inline-block px-3 py-1.5 bg-white rounded shadow-sm">
                  <p className="text-[10px] font-bold text-[#0F172A] tracking-wide uppercase">{testimonial.company}</p>
                </div>
              </div>

              {/* Name overlay — bottom right */}
              <div className="absolute right-5 bottom-4">
                <p className="text-sm font-heading font-medium text-white/90 italic">{testimonial.name}</p>
              </div>
            </>
          )}
        </div>

        {/* Right — Info Panel */}
        <div className="flex-1 flex flex-col justify-center p-6 md:p-10">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-text-primary mb-5 tracking-tight">
            {testimonial.name}
          </h3>

          <p className="text-sm md:text-[0.9375rem] text-text-muted leading-relaxed mb-8">
            &ldquo; {testimonial.quote} &rdquo;
          </p>

          <a 
            href={testimonial.linkedIn} 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex w-10 h-10 rounded-lg bg-[#0077B5] items-center justify-center hover:bg-[#005E93] transition-colors shadow-sm"
          >
            <Linkedin className="w-5 h-5 text-white" />
          </a>
        </div>
      </div>
    </div>
  )
}

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  React.useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    return () => { emblaApi.off('select', onSelect) }
  }, [emblaApi])

  const scrollPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-surface to-primary">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-accent tracking-wide uppercase mb-3">Testimonials</p>
            <h2 className="text-h2 font-display font-bold text-text-primary mb-3">
              What Our Clients Say
            </h2>
            <p className="text-text-muted">
              Hear directly from engineering leaders and product managers about partnering with VIO.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-3">
            <button 
              onClick={scrollPrev}
              className="w-11 h-11 rounded-full border border-border bg-primary flex items-center justify-center text-text-muted hover:text-text-primary hover:border-[#94A3B8] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={scrollNext}
              className="w-11 h-11 rounded-full border border-border bg-primary flex items-center justify-center text-text-muted hover:text-text-primary hover:border-[#94A3B8] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel — one full-width card at a time */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="flex-[0_0_100%] min-w-0">
                <TestimonialSlide testimonial={t} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-10 gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                selectedIndex === i ? 'bg-accent w-8' : 'bg-border w-2 hover:bg-text-subtle'
              }`}
              onClick={() => emblaApi?.scrollTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
