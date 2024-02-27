import Link from 'next/link'
import React from 'react'

interface LogoProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const Logo = React.forwardRef<HTMLAnchorElement, LogoProps>(() => {
  return (
    <Link
      className='font-inter text-[25px] font-bold transition-colors hover:text-muted-foreground'
      href='/'
    >
      KEYCAP.
    </Link>
  )
})
Logo.displayName = 'Logo'

export default Logo
