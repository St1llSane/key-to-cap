import ProductsList from './products-list'

const Products = () => {
  return (
    <div className='flex flex-col gap-y-10 pb-80'>
      <div>
        <h4 className='text-[44px] font-semibold leading-10'>
          Featured products
        </h4>
        <p className='mt-2 text-lg'>
          Products that are gaining popularity
        </p>
      </div>
      <ProductsList />
    </div>
  )
}

export default Products
