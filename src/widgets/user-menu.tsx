import SearchBtn from '@/features/buttons/search-btn'
import LinkButton from '@/shared/ui/links/link'
import { ShoppingCart, User2 } from 'lucide-react'

const UserMenu = () => {
  const isUserAuth = false

  return (
    <div className='ml-auto flex items-center gap-x-3'>
      <SearchBtn />
      <LinkButton
        variant='ghost'
        size='icon'
        href='/cart'
        Icon={
          <ShoppingCart
            className='text-primary'
            size={20}
            strokeWidth={1.75}
          />
        }
      />
      {isUserAuth ? (
        <LinkButton
          variant='ghost'
          size='icon'
          href='profile'
          Icon={
            <User2 className='text-primary' size={20} strokeWidth={1.75} />
          }
          data-testid='profile-link'
        />
      ) : (
        <LinkButton
          variant='ghost'
          size='icon'
          href='sign-in/'
          Icon={
            <User2 className='text-primary' size={20} strokeWidth={1.75} />
          }
        />
      )}
    </div>
  )
}

export default UserMenu
