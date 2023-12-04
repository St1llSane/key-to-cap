'use client'

import { User2 } from 'lucide-react'
import LinkButton from 'shared/ui/links/link'

const ProfileLink = () => {
  const isUserAuth = false

  return (
    <LinkButton
      href={isUserAuth ? 'profile' : 'sign-in'}
      Icon={
        <User2 className='text-primary' size={20} strokeWidth={1.75} />
      }
    />
  )
}

export default ProfileLink
