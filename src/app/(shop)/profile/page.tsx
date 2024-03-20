'use client'

import { useGetUser } from '@/shared/api/hooks/useGetUser'
import { useSignOut } from '@/shared/api/hooks/useSignOut'

const Profile = () => {
  const { user, isPending } = useGetUser()
  const { mutateAsync: signOutMutate, isPending: isSignOutPending } =
    useSignOut()

  const onClick = () => {
    if (isSignOutPending) return

    signOutMutate()
  }

  if (isPending) return <></>

  return (
    <div className='min-h-[calc(100vh_-_80px)]'>
      <p>{user.email}</p>
      <p>{user.firstName}</p>
      <p>{user.lastName}</p>
      <p>{user.createdAt}</p>
      <button onClick={onClick}>Sign Out</button>
    </div>
  )
}

export default Profile
