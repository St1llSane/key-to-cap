import LinkButton from '@/shared/ui/links/link'
import { ShoppingCart } from 'lucide-react'
import React from 'react'

const CartLink = () => {
  return (
    <LinkButton
      variant='ghost'
      size='icon'
      href='/cart'
      Icon={
        <ShoppingCart
          className='text-primary'
          size={20}
          strokeWidth={1.75}
        />
      }
    />
  )
}

export default CartLink
