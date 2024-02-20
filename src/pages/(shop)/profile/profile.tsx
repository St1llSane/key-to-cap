'use client'

import { useSignOut } from './api/useSignOut'

const Profile = () => {
  const { mutateAsync: signOutMutate, isPending } = useSignOut()

  const onClick = () => {
    if (isPending) return

    signOutMutate()
  }

  return (
    <div>
      Profile
      <button onClick={onClick}>Sign Out</button>
    </div>
  )
}

export default Profile
