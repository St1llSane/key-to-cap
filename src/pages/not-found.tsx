import LinkButton from 'shared/ui/links/link'

const NotFound = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-white dark:bg-gray-800'>
      <h1 className='text-9xl font-bold text-black dark:text-white'>
        404
      </h1>
      <h2 className='mt-2 text-lg text-gray-600 dark:text-gray-300'>
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </h2>
      <LinkButton href='/'>Return to Homepage</LinkButton>
    </div>
  )
}

export default NotFound
