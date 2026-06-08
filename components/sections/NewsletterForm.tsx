"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/Button"
import { Mail, CheckCircle2, AlertCircle } from "lucide-react"

interface NewsletterFormValues {
  email: string
}

export function NewsletterForm() {
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterFormValues>({
    defaultValues: { email: "" },
  })

  async function onSubmit(data: NewsletterFormValues) {
    setStatus("loading")
    setTimeout(() => {
      setStatus("success")
      reset()
      setTimeout(() => setStatus("idle"), 3000)
    }, 1000)
  }

  return (
    <section className="py-24 relative z-10 bg-surface border-t border-border">
      <div className="container">
        <motion.div 
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/10 text-accent mb-6">
            <Mail className="w-7 h-7" />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-display font-bold text-text-primary mb-3">
            Stay Ahead of the Curve
          </h2>
          <p className="text-text-muted mb-8 text-[0.9375rem]">
            Subscribe for the latest insights on enterprise architecture, AI integration, and digital transformation.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto relative">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <input
                  {...register("email", {
                    required: "Please enter your email address.",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Please enter a valid email address.",
                    },
                  })}
                  type="email"
                  placeholder="name@company.com"
                  disabled={status === "loading" || status === "success"}
                  className={`w-full h-11 px-4 rounded-lg bg-primary border ${errors.email ? 'border-red-400' : 'border-border'} text-text-primary placeholder:text-text-subtle text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all disabled:opacity-50`}
                />
              </div>
              <Button 
                type="submit" 
                size="default" 
                disabled={status === "loading" || status === "success"}
                className="h-11 w-full sm:w-28"
              >
                {status === "loading" ? (
                  <span className="animate-pulse text-sm">Sending…</span>
                ) : status === "success" ? (
                  <CheckCircle2 className="w-5 h-5 text-success" />
                ) : (
                  "Subscribe"
                )}
              </Button>
            </div>
            
            {errors.email && (
              <motion.div 
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -bottom-7 left-0 flex items-center text-red-500 text-xs"
              >
                <AlertCircle className="w-3.5 h-3.5 mr-1" />
                {errors.email.message}
              </motion.div>
            )}
            
            {status === "success" && (
              <motion.div 
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -bottom-7 left-0 right-0 flex items-center justify-center text-success text-xs font-medium"
              >
                <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                You&apos;ve successfully subscribed!
              </motion.div>
            )}
          </form>
          
          <p className="text-xs text-text-subtle mt-10">
            By subscribing, you agree to our Privacy Policy. We&apos;ll never share your email.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
