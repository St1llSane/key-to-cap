'use client'

import { User2 } from 'lucide-react'
import LinkButton from 'shared/ui/links/link'

const ProfileLink = () => {
  const isUserAuth = false

  return (
    <LinkButton
      path={isUserAuth ? 'profile' : 'login'}
      Icon={<User2 size={20} strokeWidth={1.75} />}
    />
  )
}

export default ProfileLink
