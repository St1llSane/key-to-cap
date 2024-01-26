import { inter } from '@/shared/styles/fonts'
import LinkButton from '@/shared/ui/links/link'
import Logo from '@/shared/ui/links/logo'
import { cn } from '@/shared/utils/classNames'

const NotFound = () => {
  return (
    <div className='relative'>
      <div className='absolute left-10 top-8 z-10'>
        <Logo />
      </div>
      <div className='relative flex min-h-screen flex-col items-center justify-center'>
        <h2
          className={cn(
            'text-[9rem] font-bold leading-none text-foreground',
            inter.className
          )}
        >
          404
        </h2>
        <h3 className='mt-3 text-lg text-muted-foreground dark:text-gray-300'>
          Oops! Looks like the page you&apos;re looking for doesn&apos;t
          exist.
        </h3>
        <LinkButton
          className='mt-6 underline underline-offset-8'
          variant='underlined'
          href='/'
        >
          Return to Homepage
        </LinkButton>
      </div>
    </div>
  )
}

export default NotFound
