import Link from 'next/link'
import { TITLE } from 'shared/constants/titles'
import { inter } from 'shared/styles/fonts'
import { cn } from 'shared/utils/classNames'

const logo = () => {
  return (
    <Link
      className={cn(
        'text-2xl font-bold transition-colors hover:text-secondary',
        inter.className
      )}
      href='/'
    >
      {TITLE.LOGO}
    </Link>
  )
}

export default logo
