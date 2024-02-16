import Link from 'next/link'
import { NavDataProducts } from './constants/constants'

const NavItemCardProducts = ({
  categoryName,
  products
}: {
  categoryName: string
  products: NavDataProducts
}) => {
  return (
    <div className='grid flex-1 grid-cols-1 grid-rows-4'>
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
}

export default NavItemCardProducts
