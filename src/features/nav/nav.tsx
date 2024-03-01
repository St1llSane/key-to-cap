'use client'

import Link from 'next/link'

import { useGetProducts } from '@/shared/api/hooks/useGetProducts'
import {
  NavigationMenu,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/shared/ui/navigation-menu'

import { navCategories } from './constants/constants'
import NavItemCard from './nav-item-card'

const Nav = () => {
  const { products, isPending } = useGetProducts()

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navCategories.map((item) => (
          <NavigationMenuItem key={item.category}>
            {/* TODO get rid of button inside link */}
            <Link href={`/categories/${item.category.toLowerCase()}`}>
              <NavigationMenuTrigger>
                {item.category}
              </NavigationMenuTrigger>
            </Link>
            <NavItemCard
              category={item.category}
              previewImage={item.previewImage}
              products={products}
              isPending={isPending}
              key={item.category}
            />
          </NavigationMenuItem>
        ))}
        <NavigationMenuIndicator className='NavigationMenuIndicator' />
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default Nav
