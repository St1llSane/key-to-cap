'use client'

import Logo from 'shared/ui/links/logo'
import Container from 'widgets/layouts/container'
import MainNav from 'widgets/layouts/main-nav'
import UserMenu from 'widgets/user-menu'

const Header = () => {
  return (
    <header className='py-5'>
      <Container className='flex items-center gap-x-10'>
        <Logo />
        <MainNav />
        <UserMenu />
      </Container>
    </header>
  )
}

export default Header
