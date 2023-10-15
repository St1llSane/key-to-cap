import { BUTTON } from 'shared/constants/buttons'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from 'widgets/navigation-menu'

const Nav = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {BUTTON.NAV_ITEM.map((navItem) => (
          <NavigationMenuItem>
            <NavigationMenuTrigger className='text-base'>
              {navItem}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default Nav
