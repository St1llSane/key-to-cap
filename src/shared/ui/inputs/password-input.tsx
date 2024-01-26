import { cn } from '@/shared/utils/classNames'
import { Eye, EyeOff } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from '../buttons/button'
import { Input, type InputProps } from './input'

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false)

    return (
      <div className='relative'>
        <Input
          className={cn('pr-11', {
            'font-sans': !showPassword && props.value !== ''
          })}
          placeholder='Aa123456'
          type={showPassword ? 'text' : 'password'}
          ref={ref}
          {...props}
        />
        <Button
          type='button'
          variant='ghost'
          size='sm'
          className='absolute right-0 top-0 h-full px-3 py-1 hover:bg-transparent'
          onClick={() => setShowPassword((prev) => !prev)}
          disabled={props.value === '' || props.disabled}
        >
          {showPassword ? (
            <EyeOff
              className='text-primary'
              size={20}
              strokeWidth={1.75}
            />
          ) : (
            <Eye className='text-primary' size={20} strokeWidth={1.75} />
          )}
        </Button>
      </div>
    )
  }
)
PasswordInput.displayName = 'PasswordInput'

export default PasswordInput
