import { VariantProps } from 'class-variance-authority'
import { buttonVariants } from 'shared/ui/buttons/button'

export type LinkVariantsProps = VariantProps<
  typeof buttonVariants
>['variant']
