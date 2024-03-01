export const NavProductsSkeleton = () => {
  const products = Array(4).fill(1)

  return (
    <div className='grid flex-1 grid-cols-1 grid-rows-4 gap-y-4'>
      {products.map((_, i) => (
        <div
          className='animate-pulse rounded-md bg-muted px-3 transition-colors'
          key={i}
        />
      ))}
    </div>
  )
}
