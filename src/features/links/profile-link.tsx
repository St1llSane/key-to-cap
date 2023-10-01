import { User2 } from 'lucide-react'
import CustomLink from 'shared/ui/links/link'

const ProfileLink = () => {
  return (
    <CustomLink
      path='profile'
      Icon={<User2 size={20} strokeWidth={1.75} />}
    />
  )
}

export default ProfileLink
