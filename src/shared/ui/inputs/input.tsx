import { VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'
import { cn } from 'shared/utils/classNames'

const inputVariants = cva(
  'flex w-full bg-background text-base placeholder:text-muted-foreground',
  {
    variants: {
      variant: {
        default:
          'bg-background text-foreground border border-border rounded-md pt-2 pb-1.5 px-3 focus-visible:outline-none focus-visible:border-foreground',
        underline:
          'border-b border-input bg-background py-1.5 pl-1.5 pr-3 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:rounded-sm focus-visible:ring-offset-2',
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
  ({ className, variant, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, className }), {
          'font-sans': type === 'password'
        })}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export { Input }
