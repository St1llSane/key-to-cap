'use client'

// import { useGetProducts } from '@/shared/api/hooks/useGetProducts'
import { constant } from './constants/constants'
import ProductCard from './product-card'

const ProductsList = () => {
  // const { products } = useGetProducts()
  // console.log('🚀 ~ ProductsList ~ products:', products)

  // if (!products) return <></>

  return (
    <div className='grid grid-cols-4 gap-4'>
      {/* {Object.values(products)
        .flat()
        .map((product) => (
          <ProductCard product={product} key={product.id} />
        ))} */}
      {constant.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  )
}

export default ProductsList
