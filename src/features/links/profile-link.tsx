'use client'

import LinkButton from '@/shared/ui/links/link'
import { User2 } from 'lucide-react'

const ProfileLink = () => {
  return (
    <LinkButton
      variant='ghost'
      size='icon'
      href='profile'
      Icon={
        <User2 className='text-primary' size={20} strokeWidth={1.75} />
      }
      data-testid='profile-link'
    />
  )
}

export default ProfileLink
