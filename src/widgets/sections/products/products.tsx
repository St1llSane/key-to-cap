'use client'

import { useGetProducts } from '@/shared/api/hooks/useGetProducts'

const Products = () => {
  const { products } = useGetProducts()
  console.log('🚀 ~ Products ~ products:', products)

  return (
    <div className='pb-80'>
      <h4 className='text-[44px] font-semibold leading-10'>
        Featured products
      </h4>
      <p className='mt-2 text-lg'>Products that are gaining popularity</p>
    </div>
  )
}

export default Products
