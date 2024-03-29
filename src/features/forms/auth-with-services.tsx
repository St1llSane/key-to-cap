import React from 'react'

import { FaFacebookF, FaGoogle, FaLinkedinIn } from 'react-icons/fa'

import { Button } from '@/shared/ui/buttons/button'

interface SignInWithProvidersPros
  extends React.HTMLAttributes<HTMLDivElement> {}

const providers = [
  {
    name: 'Google',
    icon: <FaGoogle />
  },
  {
    name: 'Linkedin',
    icon: <FaLinkedinIn />
  },
  {
    name: 'Facebook',
    icon: <FaFacebookF />
  }
]

const AuthWithServices = React.forwardRef<
  HTMLButtonElement,
  SignInWithProvidersPros
>(({ ...props }: SignInWithProvidersPros, ref) => {
  return (
    <div className='flex justify-between gap-x-4' {...props}>
      {providers.map((provider) => (
        <Button
          className='flex flex-1 items-center gap-x-2 shadow-md'
          variant='solid'
          size='sm'
          ref={ref}
          key={provider.name}
        >
          {provider.icon}
          <span>{provider.name}</span>
        </Button>
      ))}
    </div>
  )
})
AuthWithServices.displayName = 'AuthWithServices'

export default AuthWithServices
