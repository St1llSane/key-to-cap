import Link from 'next/link'
import { TITLE } from 'shared/constants/titles'
import { chivo } from 'shared/styles/fonts'
import { cn } from 'shared/utils/classNames'

const logo = () => {
  return (
    <Link
      className={cn(
        'text-2xl font-bold transition-colors hover:text-accent_dark',
        chivo.className
      )}
      href='/'
    >
      {TITLE.LOGO}
    </Link>
  )
}

export default logo
