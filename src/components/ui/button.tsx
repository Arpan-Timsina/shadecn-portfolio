import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import * as React from 'react'

const buttonVariants = cva(
  'active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900',
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-secondary",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          'border border-[#000] bg-transparent hover:bg-accent hover:text-accent-foreground',
        custom:
          ' bg-[#020817] text-white  hover:bg-[#020817d6]  hover:shadow-lg',
        subtle:
          'border border-input bg-background hover:bg-[#6aa2e6] hover:text-white',
        ghost:
          'bg-transparent hover:bg-zinc-300 text-zinc-800 data-[state=open]:bg-transparent data-[state=open]:bg-transparent',
        link: 'bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-2 rounded-md',
        xs: 'h-8 px-1.5 rounded-sm',
        lg: 'h-11 px-8 rounded-md',
        icon: "h-10 w-10",
        notch:"text-2xl px-2"
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

import { Slot } from "@radix-ui/react-slot" // Import Slot

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean; // Add asChild prop
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant,
      isLoading,
      size,
      asChild = false, // Add asChild with default false
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"; // Determine component type
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {/* Loader is only rendered if not asChild. If asChild, the child should handle its own loading state if necessary. */}
        {!asChild && isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants }