'use client'

import Logo from 'shared/ui/logo'
import Container from 'widgets/layouts/container'
import MainNav from './layouts/main-nav'

const Header = () => {
  return (
    <header className='py-5'>
      <Container className='flex items-center gap-x-10'>
        <Logo />
        <MainNav />
      </Container>
    </header>
  )
}

export default Header
