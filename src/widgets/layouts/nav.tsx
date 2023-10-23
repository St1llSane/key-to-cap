import keyboardPreview from 'assets/categories_previews/keyboard_preview.webp'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from 'widgets/navigation-menu'

const navData = {
  'Keyboards': {
    href: '/keyboards',
    previewImageSrc: keyboardPreview,
    products: [
      { title: 'Keyboard 1' },
      { title: 'Keyboard 2' },
      { title: 'Keyboard 3' }
    ]
  },
  'Mouses': {
    href: '/mouses',
    previewImageSrc: keyboardPreview,
    products: [
      { title: 'Mouses 1' },
      { title: 'Mouses 2' },
      { title: 'Mouses 3' }
    ]
  },
  'Mouse pads': {
    href: '/mouse-pads',
    previewImageSrc: keyboardPreview,
    products: [
      { title: 'Pads 1' },
      { title: 'Pads 2' },
      { title: 'Pads 3' }
    ]
  },
  'Keycaps': {
    href: '/keycaps',
    previewImageSrc: keyboardPreview,
    products: [
      { title: 'Keycaps 1' },
      { title: 'Keycaps 2' },
      { title: 'Keycaps 3' }
    ]
  }
}

const Nav = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {Object.entries(navData).map(
          ([category, { href, previewImageSrc, products }]) => (
            <NavItem
              href={href}
              previewImageSrc={previewImageSrc}
              category={category}
              products={products}
              key={category}
            />
          )
        )}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const NavItem = ({
  href,
  previewImageSrc,
  category,
  products
}: {
  href: string
  previewImageSrc: StaticImageData
  category: string
  products: { title: string }[]
}) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className='text-base'>
        {category}
      </NavigationMenuTrigger>
      <NavItemContent
        href={href}
        previewImageSrc={previewImageSrc}
        category={category}
        products={products}
      />
    </NavigationMenuItem>
  )
}

const NavItemContent = ({
  href,
  previewImageSrc,
  category,
  products
}: {
  href: string
  previewImageSrc: StaticImageData
  category: string
  products: { title: string }[]
}) => {
  return (
    <NavigationMenuContent className='flex h-56 justify-between gap-4 p-3'>
      <Link
        className='group relative h-full w-[40%] overflow-hidden rounded-sm'
        href={href}
      >
        <span className='absolute inset-0 z-10 bg-black bg-opacity-60' />
        <Image
          className='object-cover transition-transform duration-200 group-hover:scale-110'
          src={previewImageSrc}
          fill
          alt={category}
        />
      </Link>
      <div className='flex flex-1 flex-col gap-y-4'>
        {products.map((product) => (
          <NavigationMenuLink
            className='rounded-sm px-3 py-2 hover:bg-green-100'
            key={product.title}
          >
            {product.title}
          </NavigationMenuLink>
        ))}
      </div>
    </NavigationMenuContent>
  )
}

export default Nav
