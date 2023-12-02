import Link from 'next/link'
import { inter } from 'shared/styles/fonts'
import { cn } from 'shared/utils/classNames'

const logo = () => {
  return (
    <Link
      className={cn(
        'text-2xl font-bold transition-colors hover:text-muted-foreground',
        inter.className
      )}
      href='/'
    >
      KEYCAP.
    </Link>
  )
}

export default logo
