import keyboardPreview from 'assets/categories_previews/keyboard_preview.webp'
import { ChevronDown } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { RefObject, useRef, useState } from 'react'
import { useMultiTargetsHandleClickOutside } from 'shared/hooks/useMultiTargetsHandleClickOutside'
import { cn } from 'shared/utils/classNames'

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
    <nav className='relative'>
      <ul className='flex'>
        {Object.entries(navData).map(([categoryName]) => (
          <NavItemTrigger
            categoryName={categoryName}
            activeNavItem={activeNavItem}
            key={categoryName}
          />
        ))}
      </ul>
      {Object.entries(navData).map(
        ([
          categoryName,
          { categoryHref, previewImageSrc, previewImageText, products }
        ]) => (
          <NavItemContent
            categoryHref={categoryHref}
            previewImageSrc={previewImageSrc}
            previewImageText={previewImageText}
            categoryName={categoryName}
            products={products}
            activeNavItem={activeNavItem}
            contentRef={contentRef}
            key={categoryName}
          />
        )
      )}
    </nav>
  )
}

const NavItemTrigger = ({
  categoryName,
  activeNavItem
}: {
  categoryName: string
  activeNavItem: string | null
}) => {
  return (
    <li className='flex cursor-pointer items-center gap-x-2 rounded-md px-4 py-1.5 text-base hover:bg-accent'>
      <span>{categoryName}</span>
      <ChevronDown
        className={cn(
          'mt-[2px] transition-transform',
          activeNavItem === categoryName && 'rotate-180'
        )}
        size={14}
      />
    </li>
  )
}

const NavItemContent = ({
  categoryHref,
  previewImageSrc,
  previewImageText,
  categoryName,
  products,
  activeNavItem,
  contentRef
}: {
  categoryHref: string
  previewImageSrc: StaticImageData
  previewImageText: string
  categoryName: string
  products: { productHref: string; title: string; description: string }[]
  activeNavItem: string | null
  contentRef: RefObject<HTMLDivElement>
}) => {
  return (
    activeNavItem === categoryName && (
      <div
        className='absolute mt-1.5 flex h-64 w-full max-w-[510px] justify-between gap-4 overflow-hidden rounded-md border border-border bg-popover p-4 text-popover-foreground shadow'
        ref={contentRef}
      >
        <Link
          className='group relative h-full w-[40%] overflow-hidden rounded-md'
          href={categoryHref}
        >
          <span className='absolute inset-0 z-10 bg-black bg-opacity-[65%]' />
          <Image
            className='object-cover transition-transform duration-200 will-change-transform group-hover:scale-[106%]'
            src={previewImageSrc}
            fill
            alt={categoryName}
          />
          <span className='absolute bottom-0 left-0 right-0 top-0 z-20 flex items-center justify-center text-xl font-medium uppercase tracking-wider text-background'>
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
  )
}

export default Nav
