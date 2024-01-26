import { cn } from '@/shared/utils/classNames'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Container = ({ className, ...props }: ContainerProps) => {
  return (
    <div
      className={cn('mx-auto w-full max-w-[1230px] px-[15px]', className)}
      data-testid='aaaaaa'
      {...props}
    />
  )
}

export default Container
