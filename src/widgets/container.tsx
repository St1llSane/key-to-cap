interface ContainerProps {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className='w-full max-w-[1230px] mx-auto px-[15px]'>
      {children}
    </div>
  )
}

export default Container
