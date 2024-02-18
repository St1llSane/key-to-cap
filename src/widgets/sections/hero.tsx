'use client'

import { refreshTokens } from '@/shared/api/refreshTokens'
import { inter } from '@/shared/styles/fonts'
import SmallKeyboard from '@/shared/ui/3d/small-keyboard'
import { Button } from '@/shared/ui/buttons/button'
import { cn } from '@/shared/utils/classNames'

const Hero = () => {
  return (
    <section className='grid h-[calc(100vh_-_80px)] grid-cols-[600px_1fr] place-content-center items-center gap-10'>
      <div>
        <h1 className='text-xl'>KEYCAP. store</h1>
        <p
          className={cn(
            'mt-2 flex flex-col text-[63px] font-bold uppercase leading-[78px]',
            inter.className
          )}
        >
          <span className='tracking-[0.01em]'>One glance is enough,</span>
          <span className='tracking-[0.01em]'>one press - isn&apos;t</span>
        </p>
        <Button className='mt-8 w-fit' onClick={refreshTokens}>
          Show me!
        </Button>
      </div>
      <div className='relative grid justify-end'>
        <SmallKeyboard />
        <p className='mr-1 mt-2 text-right'>
          *Press some keys on your keyboard
        </p>
      </div>
    </section>
  )
}

export default Hero
