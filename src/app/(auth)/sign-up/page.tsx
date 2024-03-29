import Image from 'next/image'

import keyboard from '@/assets/keyboards/varmilo/Varmilo_Summit_R1_87/Varmilo_Summit_R1_87_4.webp'

import Logo from '@/shared/ui/links/logo'

import SignUpForm from '@/features/forms/sign-up-form/sign-up-form'

const SignUp = () => {
  return (
    <div className='grid h-screen grid-cols-2'>
      <div className='self-top relative'>
        <Image
          className='h-full w-full object-cover object-center'
          src={keyboard}
          alt='Varmilo_Summit_R1_87'
          priority
        />
        <div className='absolute inset-0 z-10 bg-foreground opacity-30' />
      </div>
      <div className='relative grid w-full place-content-center py-5'>
        <div className='absolute left-8 top-7'>
          <Logo />
        </div>
        <div className='my-10 w-full max-w-sm'>
          <SignUpForm />
        </div>
      </div>
    </div>
  )
}

export default SignUp
