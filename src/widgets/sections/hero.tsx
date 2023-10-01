import { cn } from 'shared/lib/utils/classNames'
import { chivo } from 'shared/styles/fonts'
import { Button } from 'shared/ui/buttons/button'
import { calls } from './content'

const Hero = () => {
  return (
    <section className='grid h-[calc(100vh_-_80px)] grid-cols-[600px_1fr] place-content-center gap-10'>
      <div>
        <h1 className='text-xl'>KEYCAP. store</h1>
        <p
          className={cn(
            'mt-3 flex flex-col text-[68px] font-bold uppercase leading-[84px]',
            chivo
          )}
        >
          <span className=' tracking-[0.01em]'>One glance is enough,</span>
          <span className=' tracking-[0.01em]'>
            one press - isn&apos;t
          </span>
        </p>
        <Button className='mt-10 w-fit'>Show me more</Button>
      </div>
      <div className='relative'>
        <p className='absolute -left-20 -top-44 flex flex-col'>
          {calls.map((call) => (
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
      </div>
    </section>
  )
}

export default Hero
