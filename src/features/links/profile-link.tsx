'use client'

import LinkButton from '@/shared/ui/links/link'
import { User2 } from 'lucide-react'

const ProfileLink = () => {
  const isUserAuth = false

  return (
    <LinkButton
      variant='ghost'
      size='icon'
      href={isUserAuth ? 'profile' : 'sign-in'}
      Icon={
        <User2 className='text-primary' size={20} strokeWidth={1.75} />
      }
    />
  )
}

export default ProfileLink
