'use client'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/shared/ui/navigation-menu'
import Link from 'next/link'
import { useGetProducts } from '../../shared/api/hooks/useGetProducts'
import { navCategories } from './constants/constants'
import NavItemCard from './nav-item-card'

const Nav = () => {
  const { data, isPending } = useGetProducts()

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navCategories.map((category) => (
          <NavigationMenuItem key={category}>
            {/* TODO get rid of button inside link */}
            <Link href={`/categories/${category.toLowerCase()}`}>
              <NavigationMenuTrigger>{category}</NavigationMenuTrigger>
            </Link>
            {data
              ? Object.entries(data).map(
                  ([
                    categoryName,
                    { previewImageSrc, previewImageText, products }
                  ]) => (
                    <NavigationMenuContent key={categoryName}>
                      <NavItemCard
                        previewImageSrc={previewImageSrc}
                        previewImageText={previewImageText}
                        categoryName={categoryName}
                        products={products}
                        isPending={isPending}
                        key={categoryName}
                      />
                    </NavigationMenuContent>
                  )
                )
              : []}
          </NavigationMenuItem>
        ))}
        <NavigationMenuIndicator className='NavigationMenuIndicator' />
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default Nav
