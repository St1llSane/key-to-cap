'use client'

import { inter } from '@/shared/styles/fonts'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/shared/ui/navigation-menu'
import { cn } from '@/shared/utils/classNames'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useGetProducts } from './api/useGetProducts'
import { navData } from './constants/constants'

const Nav = () => {
  const { data } = useGetProducts()
  console.log('🚀 ~ Nav ~ data:', data)

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {Object.entries(navData).map(
          ([
            categoryName,
            { categoryHref, previewImageSrc, previewImageText, products }
          ]) => (
            <NavigationMenuItem key={categoryName}>
              {/* TODO get rid of button inside link */}
              <Link href={categoryHref}>
                <NavigationMenuTrigger>
                  {categoryName}
                </NavigationMenuTrigger>
              </Link>
              <NavigationMenuContent>
                <NavItemContent
                  categoryHref={categoryHref}
                  previewImageSrc={previewImageSrc}
                  previewImageText={previewImageText}
                  categoryName={categoryName}
                  products={products}
                  key={categoryName}
                />
              </NavigationMenuContent>
            </NavigationMenuItem>
          )
        )}
        <NavigationMenuIndicator className='NavigationMenuIndicator' />
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const NavItemContent = ({
  categoryHref,
  previewImageSrc,
  previewImageText,
  categoryName,
  products
}: {
  categoryHref: string
  previewImageSrc: StaticImageData
  previewImageText: string
  categoryName: string
  products: { productHref: string; name: string; description: string }[]
}) => {
  return (
    <div className='flex h-64 max-w-[510px] justify-between gap-4 overflow-hidden'>
      <Link
        className='group relative h-full w-[40%] overflow-hidden rounded-md'
        href={categoryHref}
      >
        <span className='absolute inset-0 z-10 bg-black bg-opacity-[65%]' />
        <Image
          className='h-full object-cover transition-transform duration-200 will-change-transform group-hover:scale-[106%]'
          src={previewImageSrc}
          alt={categoryName}
          priority
        />
        <span
          className={cn(
            'absolute bottom-0 left-0 right-0 top-0 z-20 flex items-center justify-center text-xl font-semibold uppercase tracking-[0.075em] text-background',
            inter.className
          )}
        >
          {previewImageText}
        </span>
      </Link>
      <div className='grid flex-1 grid-cols-1 grid-rows-4'>
        {products.map((product) => (
          <Link
            className='flex h-full flex-col items-start justify-center gap-[2px] rounded-md px-3 transition-colors hover:bg-accent'
            href={product.productHref}
            key={product.name}
          >
            <h4 className='font-medium'>{product.name}</h4>
            <p className='text-sm text-muted-foreground'>
              {product.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Nav
