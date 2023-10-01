import { VariantProps } from 'class-variance-authority'
import { buttonVariants } from 'shared/ui/buttons/button'

export type LinkVariantsProps = Pick<
  VariantProps<typeof buttonVariants>,
  'variant'
>['variant']
