import SearchBtn from 'features/buttons/search-btn'
import CartLink from 'features/links/cart-link'
import ProfileLink from 'features/links/profile-link'

const UserMenu = () => {
  return (
    <div className='flex items-center gap-x-3 ml-auto'>
      <SearchBtn />
      <CartLink />
      <ProfileLink />
    </div>
  )
}

export default UserMenu
