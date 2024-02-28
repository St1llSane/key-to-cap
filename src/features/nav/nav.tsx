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
  const { data: navProducts } = useGetProducts()

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navCategories.map((category) => (
          <NavigationMenuItem key={category}>
            {/* TODO get rid of button inside link */}
            <Link href={`/categories/${category.toLowerCase()}`}>
              <NavigationMenuTrigger>{category}</NavigationMenuTrigger>
            </Link>
            <NavItemCard
              category={category}
              navProducts={navProducts}
              key={category}
            />
          </NavigationMenuItem>
        ))}
        <NavigationMenuIndicator className='NavigationMenuIndicator' />
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default Nav
