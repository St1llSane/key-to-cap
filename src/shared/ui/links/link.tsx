import { VariantProps } from 'class-variance-authority'
import type { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import type { ReactElement } from 'react'
import { Button } from 'shared/ui/buttons/button'
import { buttonVariants } from 'shared/ui/buttons/button'

type LinkVariantsProps = VariantProps<typeof buttonVariants>['variant']

interface CustomLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: LinkVariantsProps
  path: string
  Icon?: ReactElement<LucideIcon>
  children?: React.ReactNode
}

const LinkButton = ({
  variant,
  path,
  Icon,
  children,
  ...props
}: CustomLinkProps) => {
  return (
    <Button variant={variant ? variant : 'ghost'} size='icon' asChild>
      <Link href={`/${path}`} {...props}>
        {Icon && Icon}
        {children && <span>{children}</span>}
      </Link>
    </Button>
  )
}

export default LinkButton
