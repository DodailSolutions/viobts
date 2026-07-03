"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare, 
  Building2, 
  Sparkles,
  Facebook,
  Instagram,
  Twitter,
  Youtube
} from "lucide-react"

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid business email address."),
  phone: z.string().optional(),
  company: z.string().min(1, "Company name is required."),
  service: z.string({
    required_error: "Please select a service of interest.",
  }),
  message: z.string().min(10, "Please provide some details (at least 10 characters)."),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

export default function ContactUsPage() {
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const [submitError, setSubmitError] = React.useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    },
  })

  const onSubmit = async (data: ContactFormValues) => {
    try {
      setSubmitError(null)
      // Simulate API submit delay
      await new Promise((resolve) => setTimeout(resolve, 1500))
      
      console.log("Contact form data submitted:", data)
      setIsSubmitted(true)
      reset()
    } catch (err) {
      setSubmitError("Something went wrong. Please try again.")
    }
  }

  return (
    <>
      {/* ─── Hero Section ─── */}
      <section className="py-24 pt-32 bg-primary relative overflow-hidden border-b border-border">
        {/* Decorative Glowing Orbs */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-brand opacity-10 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-secondary opacity-5 blur-[120px] pointer-events-none" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />

        <div className="container relative z-10 px-4 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-6">Get In Touch</Badge>
          </motion.div>

          <motion.h1
            className="text-h1 font-display font-bold mb-6 text-text-primary tracking-tight leading-[1.12]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Start the Conversation
          </motion.h1>

          <motion.p
            className="text-xl text-text-muted leading-relaxed font-normal"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We would love to speak with you. Reach out using the form below or book a consultation call directly with our engineering team.
          </motion.p>
        </div>
      </section>

      {/* ─── Main Content Section ─── */}
      <section className="py-20 bg-surface/20">
        <div className="container px-4 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* ─── Left Column: Contact info & Scheduler Promo ─── */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Core Details Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="bg-surface border-border/50 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-xl font-display font-bold text-text-primary">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-sm text-text-muted uppercase tracking-wider mb-1">Email Us</h4>
                        <a 
                          id="contact-email-link"
                          href="mailto:sales@viobts.com" 
                          className="text-text-primary font-medium hover:text-accent transition-colors text-base"
                        >
                          sales@viobts.com
                        </a>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-sm text-text-muted uppercase tracking-wider mb-1">Call Us</h4>
                        <a 
                          id="contact-phone-link"
                          href="tel:+18048216588" 
                          className="text-text-primary font-medium hover:text-accent transition-colors text-base"
                        >
                          +1 804 821 6588
                        </a>
                      </div>
                    </div>

                    {/* HQ Location */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-sm text-text-muted uppercase tracking-wider mb-1">Headquarters</h4>
                        <p className="text-text-primary font-medium text-base">
                          Richmond, Virginia, USA
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Calendly Booking Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="relative overflow-hidden bg-gradient-brand-soft border border-accent/20 shadow-md group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-brand opacity-15 blur-2xl rounded-full" />
                  <CardContent className="p-8">
                    <Calendar className="w-10 h-10 text-accent mb-4 animate-pulse-slow" />
                    <h3 className="text-lg font-display font-bold text-text-primary mb-2">Book a Direct Consultation</h3>
                    <p className="text-text-muted text-sm mb-6 leading-relaxed">
                      Prefer scheduling a live chat? Set up a 30-minute discovery call directly with one of our enterprise solution architects.
                    </p>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button 
                        id="book-call-button"
                        asChild 
                        className="w-full justify-between h-11 text-sm font-semibold shine-effect"
                      >
                        <a href="https://calendly.com/viobts/consultation" target="_blank" rel="noopener noreferrer">
                          Schedule a Call
                          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </a>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Social Media Links */}
              <motion.div
                className="flex items-center justify-center lg:justify-start gap-4 pt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {[
                  { icon: Facebook, link: "https://www.facebook.com" },
                  { icon: Instagram, link: "https://www.instagram.com" },
                  { icon: Twitter, link: "https://www.twitter.com" },
                  { icon: Youtube, link: "https://www.youtube.com" }
                ].map((social, idx) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/40 shadow-sm transition-colors duration-200"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  )
                })}
              </motion.div>
            </div>

            {/* ─── Right Column: Interactive Contact Form ─── */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="bg-surface border-border/50 shadow-elevated overflow-hidden">
                  <div className="h-1.5 w-full bg-gradient-brand" />
                  <CardHeader className="p-8 pb-4">
                    <CardTitle className="text-2xl font-display font-bold text-text-primary flex items-center gap-2">
                      Send Inquiry
                      <MessageSquare className="w-5 h-5 text-accent" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 pt-2">
                    
                    <AnimatePresence mode="wait">
                      {!isSubmitted ? (
                        <motion.form 
                          key="contact-form"
                          onSubmit={handleSubmit(onSubmit)} 
                          className="space-y-6"
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          {submitError && (
                            <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg">
                              {submitError}
                            </div>
                          )}

                          {/* Grid for Name & Email */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {/* Name */}
                            <div className="flex flex-col gap-1.5">
                              <label htmlFor="name-input" className="text-xs font-semibold text-text-muted uppercase tracking-wider">Full Name *</label>
                              <input
                                id="name-input"
                                type="text"
                                placeholder="John Doe"
                                className={`h-11 rounded-lg border px-3.5 text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 ${errors.name ? 'border-red-500 focus-visible:ring-red-500' : 'border-border focus-visible:border-accent'}`}
                                {...register("name")}
                              />
                              {errors.name && (
                                <span className="text-xs text-red-500 font-medium">{errors.name.message}</span>
                              )}
                            </div>

                            {/* Email */}
                            <div className="flex flex-col gap-1.5">
                              <label htmlFor="email-input" className="text-xs font-semibold text-text-muted uppercase tracking-wider">Business Email *</label>
                              <input
                                id="email-input"
                                type="email"
                                placeholder="john@company.com"
                                className={`h-11 rounded-lg border px-3.5 text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : 'border-border focus-visible:border-accent'}`}
                                {...register("email")}
                              />
                              {errors.email && (
                                <span className="text-xs text-red-500 font-medium">{errors.email.message}</span>
                              )}
                            </div>
                          </div>

                          {/* Grid for Phone & Company */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {/* Phone */}
                            <div className="flex flex-col gap-1.5">
                              <label htmlFor="phone-input" className="text-xs font-semibold text-text-muted uppercase tracking-wider">Phone (Optional)</label>
                              <input
                                id="phone-input"
                                type="tel"
                                placeholder="+1 (555) 123-4567"
                                className="h-11 rounded-lg border border-border px-3.5 text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 focus-visible:border-accent"
                                {...register("phone")}
                              />
                            </div>

                            {/* Company */}
                            <div className="flex flex-col gap-1.5">
                              <label htmlFor="company-input" className="text-xs font-semibold text-text-muted uppercase tracking-wider">Company *</label>
                              <input
                                id="company-input"
                                type="text"
                                placeholder="Acme Inc."
                                className={`h-11 rounded-lg border px-3.5 text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 ${errors.company ? 'border-red-500 focus-visible:ring-red-500' : 'border-border focus-visible:border-accent'}`}
                                {...register("company")}
                              />
                              {errors.company && (
                                <span className="text-xs text-red-500 font-medium">{errors.company.message}</span>
                              )}
                            </div>
                          </div>

                          {/* Dropdown for Service Interest */}
                          <div className="flex flex-col gap-1.5">
                            <label htmlFor="service-select" className="text-xs font-semibold text-text-muted uppercase tracking-wider">Area of Interest *</label>
                            <select
                              id="service-select"
                              className={`h-11 rounded-lg border bg-white px-3.5 text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 ${errors.service ? 'border-red-500 focus-visible:ring-red-500' : 'border-border focus-visible:border-accent'}`}
                              {...register("service")}
                            >
                              <option value="">Select a service...</option>
                              <option value="cloud">Cloud Enablement & CI/CD</option>
                              <option value="data">Big Data & Analytics</option>
                              <option value="ai">AI, ML & RPA</option>
                              <option value="api">API & Microservices</option>
                              <option value="open-source">Open Source Integration</option>
                              <option value="workforce">Technology Workforce</option>
                              <option value="other">Other Inquiry</option>
                            </select>
                            {errors.service && (
                              <span className="text-xs text-red-500 font-medium">{errors.service.message}</span>
                            )}
                          </div>

                          {/* Message Textarea */}
                          <div className="flex flex-col gap-1.5">
                            <label htmlFor="message-textarea" className="text-xs font-semibold text-text-muted uppercase tracking-wider">Project Details *</label>
                            <textarea
                              id="message-textarea"
                              rows={4}
                              placeholder="Tell us about your project requirements, challenges, or goals..."
                              className={`rounded-lg border p-3.5 text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 ${errors.message ? 'border-red-500 focus-visible:ring-red-500' : 'border-border focus-visible:border-accent'}`}
                              {...register("message")}
                            />
                            {errors.message && (
                              <span className="text-xs text-red-500 font-medium">{errors.message.message}</span>
                            )}
                          </div>

                          {/* Submit Button */}
                          <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                            <Button 
                              id="submit-inquiry-button"
                              type="submit" 
                              disabled={isSubmitting} 
                              className="w-full h-12 text-sm font-semibold shine-effect bg-accent hover:bg-[#163AAD]"
                            >
                              {isSubmitting ? "Sending Inquiry..." : "Submit Inquiry"}
                            </Button>
                          </motion.div>
                        </motion.form>
                      ) : (
                        <motion.div 
                          key="success-card"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4 }}
                          className="flex flex-col items-center justify-center py-12 text-center"
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: [0, 1.2, 1] }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="w-16 h-16 rounded-full bg-[#059669]/10 text-[#059669] flex items-center justify-center mb-6"
                          >
                            <CheckCircle2 className="w-10 h-10" />
                          </motion.div>
                          <h3 className="text-2xl font-display font-bold text-text-primary mb-3">Inquiry Sent Successfully!</h3>
                          <p className="text-text-muted text-base max-w-md mb-8 leading-relaxed">
                            Thank you for reaching out. An enterprise architect from our team will review your project details and get back to you within 24 business hours.
                          </p>
                          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Button 
                              id="reset-form-button"
                              variant="outline" 
                              onClick={() => setIsSubmitted(false)}
                              className="h-10 text-sm font-semibold"
                            >
                              Send Another Message
                            </Button>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </CardContent>
                </Card>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Bottom CTA: AI Founders Conversation ─── */}
      <section className="py-20 bg-primary border-t border-border relative overflow-hidden">
        {/* Subtle decorative background gradient */}
        <div className="absolute inset-0 bg-gradient-brand-soft opacity-40 pointer-events-none" />
        <div className="container px-4 text-center max-w-4xl mx-auto relative z-10">
          <div className="bg-white rounded-2xl border border-border shadow-elevated p-8 md:p-12 relative overflow-hidden group">
            
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-brand opacity-[0.03] blur-xl rounded-full" />
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                <Sparkles className="w-6 h-6 animate-pulse-slow" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-text-primary mb-4 tracking-tight">
                Building an AI Company?
              </h2>
              <p className="text-text-muted text-base md:text-lg mb-8 max-w-2xl leading-relaxed">
                We host thoughtful conversations with founders and leaders building real-world AI products. Join our community, share insights, and accelerate your development.
              </p>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button 
                  id="join-conversation-button"
                  asChild
                  size="lg" 
                  className="px-8 h-12 text-sm font-semibold shine-effect bg-[#0F172A] hover:bg-[#1E293B]"
                >
                  <a href="https://form.jotform.com/260083358883465" target="_blank" rel="noopener noreferrer">
                    Join the Conversation
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </Button>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
