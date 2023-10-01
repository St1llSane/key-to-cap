import { ShoppingCart } from 'lucide-react'
import React from 'react'
import CustomLink from 'shared/ui/links/link'

const CartLink = () => {
  return (
    <CustomLink
      path='/cart'
      Icon={<ShoppingCart size={20} strokeWidth={1.75} />}
    />
  )
}

export default CartLink
