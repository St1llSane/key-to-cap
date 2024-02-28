import * as React from 'react'

import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/shared/utils/classNames'

const inputVariants = cva(
  'flex w-full max-w-full bg-background text-base placeholder:text-muted-foreground transition-colors',
  {
    variants: {
      variant: {
        default:
          'bg-background text-foreground border border-border rounded-md h-10 px-3 focus-visible:outline-none focus-visible:border-foreground',
        underline:
          'border-b border-input h-10 bg-background py-1.5 pl-1.5 pr-3 focus-visible:outline-none',
        file: 'border-0 bg-transparent text-sm font-medium',
        disabled: 'cursor-not-allowed opacity-50'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <input
        className={cn(inputVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export { Input }
