import Header from '@/features/header'
import Container from './container'

const ShopLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  )
}

export default ShopLayout
