import type { ReactElement } from 'react'

import Link from 'next/link'

import { VariantProps } from 'class-variance-authority'
import type { LucideIcon } from 'lucide-react'

import { Button } from '@/shared/ui/buttons/button'
import { buttonVariants } from '@/shared/ui/buttons/button'

type LinkVariants = VariantProps<typeof buttonVariants>['variant']
type LinkSizes = VariantProps<typeof buttonVariants>['size']

interface CustomLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: LinkVariants
  size?: LinkSizes
  href: string
  Icon?: ReactElement<LucideIcon>
  children?: React.ReactNode
}

const LinkButton = ({
  variant,
  size,
  href,
  Icon,
  children,
  ...props
}: CustomLinkProps) => {
  return (
    <Button variant={variant} size={size} asSlot>
      <Link href={href} {...props}>
        {Icon && Icon}
        {children && children}
      </Link>
    </Button>
  )
}

export default LinkButton
