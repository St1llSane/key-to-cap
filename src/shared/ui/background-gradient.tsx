import { motion } from 'framer-motion'

import { cn } from '@/shared/utils/classNames'

interface BackgroundGradientProps {
  children?: React.ReactNode
  className?: string
  animate?: boolean
}

export const BackgroundGradient = ({
  children,
  className,
  animate = true
}: BackgroundGradientProps) => {
  const variants = {
    initial: {
      backgroundPosition: '0 0'
    },
    animate: {
      backgroundPosition: ['0, 0', '50% 50%', '100% 100%']
    }
  }

  return (
    <div className={cn('group relative p-1', className)}>
      <motion.div
        className={cn(
          'duration-[400ms] absolute inset-0 z-[1] overflow-hidden rounded-md opacity-60 blur-sm transition group-hover:opacity-100',
          'bg-[radial-gradient(circle_farthest-side_at_0_100%,var(--accent),transparent),radial-gradient(circle_farthest-side_at_100%_0,#D6D4FF,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#FFC5D1,transparent),radial-gradient(circle_farthest-side_at_0_0,#FFDEF6,transparent)]'
        )}
        style={{
          backgroundSize: animate ? '400% 400%' : undefined
        }}
        variants={animate ? variants : undefined}
        initial={animate ? 'initial' : undefined}
        animate={animate ? 'animate' : undefined}
        transition={
          animate
            ? {
                duration: 4,
                repeat: Infinity,
                repeatType: 'reverse'
              }
            : undefined
        }
      />
      <motion.div
        className={cn(
          'absolute inset-0 z-[1] rounded-md',
          'bg-[radial-gradient(circle_farthest-side_at_0_100%,var(--accent),transparent),radial-gradient(circle_farthest-side_at_100%_0,#D6D4FF,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#FFC5D1,transparent),radial-gradient(circle_farthest-side_at_0_0,#FFDEF6,transparent)]'
        )}
        style={{
          backgroundSize: animate ? '400% 400%' : undefined
        }}
        variants={animate ? variants : undefined}
        initial={animate ? 'initial' : undefined}
        animate={animate ? 'animate' : undefined}
        transition={
          animate
            ? {
                duration: 4,
                repeat: Infinity,
                repeatType: 'reverse'
              }
            : undefined
        }
      />
      <div className='relative z-10'>{children}</div>
    </div>
  )
}
