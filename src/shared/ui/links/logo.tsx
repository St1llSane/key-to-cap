import Link from 'next/link'
import { cn } from 'shared/lib/utils/classNames'
import { chivo } from 'shared/styles/fonts'

const logo = () => {
  return (
    <Link
      className={cn(
        'text-2xl font-bold transition-colors hover:text-accent_dark',
        chivo.className
      )}
      href='/'
    >
      KEYCAP.
    </Link>
  )
}

export default logo
