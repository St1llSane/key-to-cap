import Link from 'next/link'
import React from 'react'
import { inter } from 'shared/styles/fonts'
import { cn } from 'shared/utils/classNames'

interface LogoProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const Logo = React.forwardRef<HTMLAnchorElement, LogoProps>(() => {
  return (
    <Link
      className={cn(
        'text-[25px] font-bold transition-colors hover:text-muted-foreground',
        inter.className
      )}
      href='/'
    >
      KEYCAP.
    </Link>
  )
})
Logo.displayName = 'Logo'

export default Logo
