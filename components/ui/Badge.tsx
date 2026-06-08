import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const baseStyles = "inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide uppercase transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
  
  const variants = {
    default: "bg-accent/10 text-accent border border-accent/20",
    outline: "text-text-muted border border-border",
  }

  return (
    <div className={cn(baseStyles, variants[variant], className)} {...props} />
  )
}

export { Badge }
