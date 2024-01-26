import SearchBtn from '@/features/buttons/search-btn'
import CartLink from '@/features/links/cart-link'
import ProfileLink from '@/features/links/profile-link'

const UserMenu = () => {
  return (
    <div className='ml-auto flex items-center gap-x-3'>
      <SearchBtn />
      <CartLink />
      <ProfileLink />
    </div>
  )
}

export default UserMenu
