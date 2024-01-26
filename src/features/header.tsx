import Nav from '@/features/nav'
import Logo from '@/shared/ui/links/logo'
import Container from '@/widgets/layouts/container'
import UserMenu from '@/widgets/user-menu'

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
