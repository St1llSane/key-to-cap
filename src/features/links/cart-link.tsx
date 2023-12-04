import { ShoppingCart } from 'lucide-react'
import React from 'react'
import LinkButton from 'shared/ui/links/link'

const CartLink = () => {
  return (
    <LinkButton
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
