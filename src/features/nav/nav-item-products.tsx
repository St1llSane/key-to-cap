import Link from 'next/link'

import { NavCategory, Products } from '@/shared/types/types'

import { NavProductsSkeleton } from './nav-products-skeleton'

interface NavItemProductsProps {
  category: NavCategory
  products: Products | undefined
  isPending: boolean
}

const NavItemProducts = ({
  category,
  products,
  isPending
}: NavItemProductsProps) => {
  if (isPending) return <NavProductsSkeleton />

  if (!products) return <></>

  return (
    <>
      {Object.entries(products).map(
        ([categoryName]) =>
          category === categoryName && (
            <div
              className='grid flex-1 grid-cols-1 grid-rows-4'
              key={categoryName}
            >
              {products[categoryName].map((product) => (
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
