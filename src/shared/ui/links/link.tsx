import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { ReactElement } from 'react'
import { LinkVariantsProps } from 'shared/types/link'
import { cn } from 'shared/utils/classNames'
import { Button } from '../buttons/button'

interface CustomLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string
  variant?: LinkVariantsProps
  path: string
  Icon?: ReactElement<LucideIcon>
  children?: React.ReactNode
}

const CustomLink = ({
  className,
  variant,
  path,
  Icon,
  children,
  ...props
}: CustomLinkProps) => {
  return (
    <Button variant={variant ? variant : 'ghost'} size='icon' asChild>
      <Link
        className={(cn('flex items-center gap-x-2'), className)}
        href={`/${path}`}
        {...props}
      >
        {Icon && Icon}
        {children && <span>{children}</span>}
      </Link>
    </Button>
  )
}

export default CustomLink
