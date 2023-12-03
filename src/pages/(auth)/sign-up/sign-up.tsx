import keyboard from 'assets/keyboards/varmilo/Varmilo_Summit_R1_87/Varmilo_Summit_R1_87_4.webp'
import SignUpForm from 'features/forms/sign-up-form'
import Image from 'next/image'
import Logo from 'shared/ui/links/logo'

const SignUp = () => {
  return (
    <div className='grid h-screen grid-cols-2'>
      <div className='relative self-center'>
        <Image
          className='h-screen w-full object-cover object-center'
          src={keyboard}
          alt='Varmilo_Summit_R1_87'
          priority
        />
        <div className='absolute inset-0 z-10 bg-primary opacity-30' />
      </div>
      <div className='relative grid h-full w-full place-content-center'>
        <div className='absolute left-8 top-6'>
          <Logo />
        </div>
        <div className='w-full max-w-sm'>
          <SignUpForm />
        </div>
      </div>
    </div>
  )
}

export default SignUp
