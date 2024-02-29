import { cookies } from 'next/headers'

import { ShoppingCart, User2 } from 'lucide-react'

import LinkButton from '@/shared/ui/links/link'

import SearchInput from '@/features/inputs/search-input'

const UserMenu = () => {
  const isUserAuth = cookies().has('refresh_token')

  return (
    <div className='ml-auto flex items-center gap-x-4'>
      <SearchInput />
      <LinkButton
        variant='ghost'
        size='icon'
        href='/cart'
        Icon={
          <ShoppingCart
            className='text-foreground'
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
            <User2
              className='text-foreground'
              size={20}
              strokeWidth={1.75}
            />
          }
          data-testid='profile-link'
        />
      ) : (
        <LinkButton variant='solid' href='sign-in/'>
          Sign In
        </LinkButton>
      )}
    </div>
  )
}

export default UserMenu
