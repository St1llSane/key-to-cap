import React, { useState } from 'react'

import { Eye, EyeOff } from 'lucide-react'

import { cn } from '@/shared/utils/classNames'

import { Button } from '../buttons/button'
import { Input, type InputProps } from './input'

interface PasswordInputProps extends InputProps {
  isShowEye?: boolean
}

const PasswordInput = React.forwardRef<
  HTMLInputElement,
  PasswordInputProps
>(({ isShowEye, ...props }, ref) => {
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
      {isShowEye && (
        <Button
          type='button'
          variant='ghost'
          size='sm'
          className='hover:bg-transparent absolute right-0 top-0 h-full px-3 py-1'
          onClick={() => setShowPassword((prev) => !prev)}
          disabled={props.value === '' || props.disabled}
        >
          {showPassword ? (
            <EyeOff
              className='text-foreground'
              size={20}
              strokeWidth={1.75}
            />
          ) : (
            <Eye
              className='text-foreground'
              size={20}
              strokeWidth={1.75}
            />
          )}
        </Button>
      )}
    </div>
  )
})
PasswordInput.displayName = 'PasswordInput'

export default PasswordInput
