'use client'

import { useSignOut } from '@/shared/api/hooks/useSignOut'

const Profile = () => {
  const { mutateAsync: signOutMutate, isPending: isSignOutPending } =
    useSignOut()

  const onClick = () => {
    if (isSignOutPending) return

    signOutMutate()
  }

  return (
    <div className='min-h-[calc(100vh_-_80px)]'>
      Profile
      <button onClick={onClick}>Sign Out</button>
    </div>
  )
}

export default Profile
