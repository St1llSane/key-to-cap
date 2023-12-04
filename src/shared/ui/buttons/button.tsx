import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'
import { cn } from 'shared/utils/classNames'

const buttonVariants = cva(
  'flex items-center justify-center rounded-md text-base ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'font-medium bg-background hover:bg-secondary border border-input',
        dark: 'text-primary-foreground bg-foreground  hover:bg-muted-foreground',
        solid: 'bg-primary text-primary-foreground',
        underlined: 'underline-offset-[5px] hover:underline',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent',
        link: 'text-primary underline-offset-4 hover:underline'
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
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

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
