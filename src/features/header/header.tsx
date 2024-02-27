import Logo from '@/shared/ui/links/logo'

import UserMenu from '@/widgets/user-menu'

import Nav from '@/features/nav/nav'

import Container from '@/app/container'

const Header = () => {
  return (
    <header className='py-5'>
      <Container className='flex items-center gap-x-8'>
        <Logo />
        <Nav />
        <UserMenu />
      </Container>
    </header>
  )
}

export default Header
