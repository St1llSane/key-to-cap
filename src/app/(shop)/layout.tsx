import Header from '@/features/header/header'

const ShopLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='container'>
      <Header />
      {children}
    </div>
  )
}

export default ShopLayout
