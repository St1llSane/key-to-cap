import { BUTTON } from 'shared/constants/buttons'
import { TEXT } from 'shared/constants/texts'
import { TITLE } from 'shared/constants/titles'
import { chivo } from 'shared/styles/fonts'
import SmallKeyboard from 'shared/ui/3d/small-keyboard'
import { Button } from 'shared/ui/buttons/button'
import { cn } from 'shared/utils/classNames'

const Hero = () => {
  return (
    <section className='grid h-[calc(100vh_-_80px)] grid-cols-[600px_1fr] place-content-center items-center gap-10'>
      <div className='relative z-10'>
        <h1 className='text-xl'>{TITLE.HERO_TITLE}</h1>
        <p
          className={cn(
            'mt-3 flex flex-col text-[68px] font-bold uppercase leading-[84px]',
            chivo
          )}
        >
          <span className='tracking-[0.01em]'>
            {TEXT.HERO_SUBTITLE[0]}
          </span>
          <span className='tracking-[0.01em]'>
            {TEXT.HERO_SUBTITLE[1]}
          </span>
        </p>
        <Button className='mt-10 w-fit'>{BUTTON.SHOW_ME}</Button>
      </div>
      <div className='relative grid justify-end'>
        {/* <p className='absolute -top-32 right-0 flex flex-col'>
          {TEXT.HERO_CALLS.map((call) => (
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
        </p> */}
        <SmallKeyboard />
        <p className='mr-1 mt-2 text-right'>{TEXT.HERO_CALL_TO_ACTION}</p>
      </div>
    </section>
  )
}

export default Hero
