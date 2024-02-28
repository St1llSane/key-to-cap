import Link from 'next/link'

import { NavProducts } from './constants/constants'
import { NavProductsSkeleton } from './nav-products-skeleton'

interface NavItemProductsProps {
  navProducts: NavProducts | null
  category: string
  isPending: boolean
}

const NavItemProducts = ({
  navProducts,
  category,
  isPending
}: NavItemProductsProps) => {
  if (isPending) return <NavProductsSkeleton />

  if (!navProducts) return <></>

  return (
    <>
      {Object.entries(navProducts).map(
        ([categoryName, { products }]) =>
          category === categoryName && (
            <div
              className='grid flex-1 grid-cols-1 grid-rows-4'
              key={categoryName}
            >
              {products.map((product) => (
                <Link
                  className='flex h-full flex-col items-start justify-center gap-[2px] rounded-md px-3 transition-colors hover:bg-accent'
                  href={`/categories/${categoryName.toLowerCase()}${product.name}${
                    product.id
                  }`}
                  key={product.name}
                >
                  <h4 className='font-medium'>{product.name}</h4>
                  <p className='text-sm text-muted-foreground'>
                    {product.description}
                  </p>
                </Link>
              ))}
            </div>
          )
      )}
    </>
  )
}

export default NavItemProducts
