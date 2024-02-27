import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import { NavDataProducts } from './constants/constants'
import NavItemCardProducts from './nav-item-card-products'

const NavItemCard = ({
  previewImageSrc,
  previewImageText,
  categoryName,
  products,
  isPending
}: {
  previewImageSrc: StaticImageData
  previewImageText: string
  categoryName: string
  products: NavDataProducts
  isPending: boolean
}) => {
  return (
    <div className='flex h-64 max-w-[510px] justify-between gap-4 overflow-hidden'>
      <Link
        className='group relative h-full w-[40%] overflow-hidden rounded-md'
        href={`/categories/${categoryName.toLowerCase()}`}
      >
        <span className='absolute inset-0 z-10 bg-black bg-opacity-[65%]' />
        <Image
          className='h-full object-cover transition-transform duration-200 will-change-transform group-hover:scale-[106%]'
          src={previewImageSrc}
          alt={categoryName}
          priority
        />
        <span className='absolute bottom-0 left-0 right-0 top-0 z-20 flex items-center justify-center font-inter text-xl font-semibold uppercase tracking-[0.075em] text-background'>
          {previewImageText}
        </span>
      </Link>
      {isPending ? (
        <>Pending...</>
      ) : (
        <NavItemCardProducts
          categoryName={categoryName}
          products={products}
        />
      )}
    </div>
  )
}

export default NavItemCard
