import { cookies } from 'next/headers'

import { ShoppingCart, User2 } from 'lucide-react'

import LinkButton from '@/shared/ui/links/link'

import SearchBtn from '@/features/buttons/search-btn'

const UserMenu = () => {
  const isUserAuth = cookies().has('refresh_token')

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
          href='/profile'
          Icon={
            <User2 className='text-primary' size={20} strokeWidth={1.75} />
          }
          data-testid='profile-link'
        />
      ) : (
        <LinkButton variant='dark' href='sign-in/'>
          Sign In
        </LinkButton>
      )}
    </div>
  )
}

export default UserMenu
