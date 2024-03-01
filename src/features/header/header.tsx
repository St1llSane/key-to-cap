import Logo from '@/shared/ui/links/logo'

import UserMenu from '@/widgets/user-menu'

import Nav from '@/features/nav/nav'

const Header = () => {
  return (
    <header className='flex items-center gap-x-8 py-5'>
      <Logo />
      <Nav />
      <UserMenu />
    </header>
  )
}

export default Header
