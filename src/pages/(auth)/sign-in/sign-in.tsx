import keyboard from 'assets/keyboards/varmilo/Varmilo_Summit_R1_87/Varmilo_Summit_R1_87_4.webp'
import SignInForm from 'features/forms/sign-in-form'
import Image from 'next/image'

const SignIn = () => {
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
      <div className='w-full max-w-sm place-self-center'>
        <SignInForm />
      </div>
    </div>
  )
}

export default SignIn
