import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "default" | "ghost" | "outline" | "accent"
  size?: "default" | "sm" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]"
    
    const variants = {
      default: "bg-accent text-white shadow-sm hover:bg-[#163AAD] hover:shadow-elevated",
      accent: "bg-[#0F172A] text-white shadow-sm hover:bg-[#1E293B] hover:shadow-elevated",
      ghost: "hover:bg-surface text-text-muted hover:text-text-primary",
      outline: "border border-border bg-transparent hover:bg-surface text-text-primary hover:border-[#94A3B8]",
    }
    
    const sizes = {
      default: "h-10 px-5 py-2 text-sm",
      sm: "h-9 rounded-lg px-3.5 text-xs",
      lg: "h-12 rounded-lg px-8 text-[0.9375rem]",
    }

    return (
      <Comp
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
