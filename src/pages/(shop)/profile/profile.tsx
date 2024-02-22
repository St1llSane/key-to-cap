'use client'

import { useIsUserAuth } from '@/shared/api/hooks/useIsUserAuth'
import { useSignOut } from '@/shared/api/hooks/useSignOut'

const Profile = () => {
  const { isUserAuth, isPending: isUserAuthPending } = useIsUserAuth({
    redirectTo: 'auth/sign-in/'
  })

  const { mutateAsync: signOutMutate, isPending: isSignOutMutatePending } =
    useSignOut()

  const onClick = () => {
    if (isSignOutMutatePending) return

    signOutMutate()
  }

  if (isUserAuthPending || !isUserAuth) return <></>

  return (
    <div className='min-h-[calc(100vh_-_80px)]'>
      Profile
      <button onClick={onClick}>Sign Out</button>
    </div>
  )
}

export default Profile
