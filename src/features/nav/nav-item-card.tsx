import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'

import { ProductCategory, Products } from '@/shared/types/types'
import { NavigationMenuContent } from '@/shared/ui/navigation-menu'

import NavItemProducts from './nav-item-products'

interface NavItemCardProps {
  category: ProductCategory
  previewImage: StaticImageData
  products: Products | undefined
  isPending: boolean
}

const NavItemCard = ({
  category,
  previewImage,
  products,
  isPending
}: NavItemCardProps) => {
  return (
    <NavigationMenuContent>
      <div className='flex h-64 max-w-[510px] justify-between gap-4 overflow-hidden'>
        <Link
          className='group relative h-full w-[40%] overflow-hidden rounded-md'
          href={`/categories/${category.toLowerCase()}`}
        >
          <span className='absolute inset-0 z-10 bg-foreground opacity-60' />
          <Image
            className='h-full object-cover transition-transform duration-200 group-hover:scale-[105%]'
            src={previewImage}
            alt={category}
            priority
          />
          <span className='absolute bottom-0 left-0 right-0 top-0 z-20 flex items-center justify-center font-inter text-xl font-semibold uppercase tracking-[0.075em] text-background'>
            {category}
          </span>
        </Link>
        <NavItemProducts
          category={category}
          products={products}
          isPending={isPending}
        />
      </div>
    </NavigationMenuContent>
  )
}

export default NavItemCard
