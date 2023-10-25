'use client'

import Logo from 'shared/ui/links/logo'
import Container from 'widgets/layouts/container'
import Nav from 'widgets/nav'
import UserMenu from 'widgets/user-menu'

const Header = () => {
  return (
    <header className='py-5'>
      <Container className='flex items-center gap-x-10'>
        <Logo />
        <Nav />
        <UserMenu />
      </Container>
    </header>
  )
}

export default Header
