import * as React from 'react'

import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/shared/utils/classNames'

const buttonVariants = cva(
  'flex items-center justify-center shrink-0 rounded-md text-base ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'font-medium bg-background border border-input shadow duration-200 hover:bg-accent hover:shadow-sketch',
        dark: 'text-background bg-foreground hover:text-foreground hover:bg-accent',
        solid:
          'text-background bg-foreground shadow hover:text-foreground hover:bg-accent hover:shadow-none',
        underline: 'underline underline-offset-8',
        ghost: 'hover:bg-accent'
      },
      size: {
        default: 'h-10 px-5',
        sm: 'h-9 px-4',
        lg: 'h-11 px-8',
        icon: 'h-10 w-10',
        unset: 'w-fit h-auto'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asSlot?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asSlot = false, ...props }, ref) => {
    const Comp = asSlot ? Slot : 'button'

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
