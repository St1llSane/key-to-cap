import Image from 'next/image'
import { HERO_KEYBOARD } from 'shared/constants/images'
import { HERO_CALLS } from 'shared/constants/titles'
import { cn } from 'shared/lib/utils/classNames'
import { chivo } from 'shared/styles/fonts'
import { Button } from 'shared/ui/buttons/button'

const Hero = () => {
  return (
    <section className='grid h-[calc(100vh_-_80px)] grid-cols-[600px_1fr] place-content-center gap-10'>
      <div className='relative z-10'>
        <h1 className='text-xl'>KEYCAP. store</h1>
        <p
          className={cn(
            'mt-3 flex flex-col text-[68px] font-bold uppercase leading-[84px]',
            chivo
          )}
        >
          <span className='tracking-[0.01em]'>One glance is enough,</span>
          <span className='tracking-[0.01em]'>one press - isn&apos;t</span>
        </p>
        <Button className='mt-10 w-fit'>Show me more</Button>
      </div>
      <div className='relative grid'>
        <p className='absolute -top-44 right-0 flex flex-col'>
          {HERO_CALLS.map((call) => (
            <span
              className={cn(
                'text-stroke whitespace-nowrap font-sans text-9xl font-bold uppercase tracking-[0.012em]',
                chivo
              )}
              key={call}
            >
              {call}
            </span>
          ))}
        </p>
        <Image
          className='relative z-10 place-self-center'
          src={HERO_KEYBOARD}
          alt='keyboard'
          priority
        />
      </div>
    </section>
  )
}

export default Hero
