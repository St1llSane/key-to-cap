import { useState } from 'react'

import { Heart } from 'lucide-react'

import { Product } from '@/shared/types/types'
import { Button } from '@/shared/ui/buttons/button'
import Toasts from '@/shared/ui/toasts'
import { cn } from '@/shared/utils/classNames'

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isFavourite, setIsFavourite] = useState(false)

  const handleSetIsFavourite = () => {
    setIsFavourite((prev) => !prev)

    if (!isFavourite) {
      Toasts.info({
        description: 'Product was added to the cart'
      })
    } else {
      Toasts.info({
        description: 'Product was removed from the cart'
      })
    }
  }

  return (
    <div className='rounded-md border border-border'>
      <div className='h-44 w-full rounded-tl-md rounded-tr-md bg-muted'></div>
      <div className='flex flex-col gap-y-4 p-4'>
        <div>
          <h6 className='text-[22px] font-medium leading-6'>
            {product.name}
          </h6>
          <p className='mt-1.5 font-inter text-sm text-muted-foreground'>
            {product.description}
          </p>
          <span className='mt-4 flex items-center gap-x-0.5 text-lg'>
            {product.price}
            <span className='text-sm'>$</span>
          </span>
        </div>
        <div className='flex gap-4'>
          <Button
            className='h-9 flex-1 hover:bg-[#38383d] hover:text-background'
            variant='dark'
          >
            Add to cart
          </Button>
          <Button
            className={cn('h-9 w-9 p-0 hover:hover:shadow-none', {
              'bg-accent': isFavourite
            })}
            onClick={handleSetIsFavourite}
          >
            <Heart size={16} strokeWidth={1.75} />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
