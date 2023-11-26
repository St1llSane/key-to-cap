import SignInForm from 'features/forms/sign-in-form'

const SignIn = () => {
  return (
    <div className='grid h-screen grid-cols-2'>
      <div className='self-center'>IMAGE</div>
      <div className='w-full max-w-sm place-self-center'>
        <SignInForm />
      </div>
    </div>
  )
}

export default SignIn
