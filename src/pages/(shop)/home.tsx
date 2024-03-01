import Hero from '@/widgets/sections/hero/hero'
import Products from '@/widgets/sections/products/products'

const Home = () => {
  return (
    <main className='space-y-12' data-testid='home-page'>
      <Hero />
      <Products />
    </main>
  )
}

export default Home
