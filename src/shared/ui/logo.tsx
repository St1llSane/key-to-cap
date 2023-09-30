import Link from 'next/link'
import { cn } from 'shared/lib/utils/classNames'
import { raleway } from 'shared/styles/fonts'

const logo = () => {
  return (
    <Link className={cn('text-2xl font-bold', raleway.className)} href='/'>
      KEYCAP.
    </Link>
  )
}

export default logo
