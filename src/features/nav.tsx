'use client'

import keyboardPreview from 'assets/categories_previews/keyboard_preview.webp'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { useMultiTargetsHandleClickOutside } from 'shared/hooks/useMultiTargetsHandleClickOutside'
import { inter } from 'shared/styles/fonts'
import { cn } from 'shared/utils/classNames'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from 'widgets/navigation-menu'

const navData = {
  'Keyboards': {
    categoryHref: '/keyboards',
    previewImageSrc: keyboardPreview,
    previewImageText: 'Keyboards',
    products: [
      {
        productHref: '/',
        title: 'Keyboard 1',
        description: 'fdslfldslaflsd'
      },
      {
        productHref: '/',
        title: 'Keyboard 2',
        description: 'fdslfldslaflsd'
      },
      {
        productHref: '/',
        title: 'Keyboard 3',
        description: 'fdslfldslaflsd'
      },
      {
        productHref: '/',
        title: 'Keyboard 4',
        description: 'fdslfldslaflsd'
      }
    ]
  },
  'Mouses': {
    categoryHref: '/mouses',
    previewImageSrc: keyboardPreview,
    previewImageText: 'Mouses',
    products: [
      {
        productHref: '/',
        title: 'Mouses 1',
        description: 'fdslfldslaflsd'
      },
      {
        productHref: '/',
        title: 'Mouses 2',
        description: 'fdslfldslaflsd'
      },
      {
        productHref: '/',
        title: 'Mouses 3',
        description: 'fdslfldslaflsd'
      }
    ]
  },
  'Mouse pads': {
    categoryHref: '/mouse-pads',
    previewImageSrc: keyboardPreview,
    previewImageText: 'Mouse pads',
    products: [
      { productHref: '/', title: 'Pads 1', description: 'fdslfldslaflsd' },
      { productHref: '/', title: 'Pads 2', description: 'fdslfldslaflsd' },
      { productHref: '/', title: 'Pads 3', description: 'fdslfldslaflsd' },
      { productHref: '/', title: 'Pads 4', description: 'fdslfldslaflsd' }
    ]
  },
  'Keycaps': {
    categoryHref: '/keycaps',
    previewImageSrc: keyboardPreview,
    previewImageText: 'Keycaps',
    products: [
      {
        productHref: '/',
        title: 'Keycaps 1',
        description: 'fdslfldslaflsd'
      },
      {
        productHref: '/',
        title: 'Keycaps 2',
        description: 'fdslfldslaflsd'
      },
      {
        productHref: '/',
        title: 'Keycaps 3',
        description: 'fdslfldslaflsd'
      },
      {
        productHref: '/',
        title: 'Keycaps 4',
        description: 'fdslfldslaflsd'
      }
    ]
  }
}

const Nav = () => {
  const [activeNavItem, setActiveNavItem] = useState<string | null>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useMultiTargetsHandleClickOutside(
    activeNavItem,
    contentRef,
    setActiveNavItem
  )

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {Object.entries(navData).map(
          ([
            categoryName,
            { categoryHref, previewImageSrc, previewImageText, products }
          ]) => (
            <NavigationMenuItem key={categoryName}>
              <NavigationMenuTrigger>{categoryName}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>
                  <NavItemContent
                    categoryHref={categoryHref}
                    previewImageSrc={previewImageSrc}
                    previewImageText={previewImageText}
                    categoryName={categoryName}
                    products={products}
                    key={categoryName}
                  />
                </NavigationMenuLink>
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
  products: { productHref: string; title: string; description: string }[]
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
            key={product.title}
          >
            <h4 className='font-medium'>{product.title}</h4>
            <p className='text-sm text-secondary-foreground'>
              {product.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Nav
