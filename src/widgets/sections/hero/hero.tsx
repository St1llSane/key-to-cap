import SmallKeyboard from '@/shared/ui/3d/small-keyboard'
import { Button } from '@/shared/ui/buttons/button'

import Categories from './categories/categories'

const Hero = () => {
  return (
    <section className='h-[calc(100vh_-_80px)]'>
      <div className='grid grid-cols-[600px_1fr] place-content-center items-center gap-10 py-36'>
        <div>
          <h1 className='text-xl'>KEYCAP. store</h1>
          <p className='mt-2 flex flex-col font-inter text-[63px] font-bold uppercase leading-[78px]'>
            <span className='tracking-[0.01em]'>
              One glance is enough,
            </span>
            <span className='tracking-[0.01em]'>
              one press - isn&apos;t
            </span>
          </p>
          <Button className='mt-8'>Show me!</Button>
        </div>
        <div className='relative grid justify-end'>
          <SmallKeyboard />
          <p className='mr-1 mt-2 text-right'>
            *Press some keys on your keyboard
          </p>
        </div>
      </div>
      <Categories />
    </section>
  )
}

export default Hero
