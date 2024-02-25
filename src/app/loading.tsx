import { Icons } from '@/shared/icons/Icons'

export default function FullScreenLoading() {
  return (
    <div className='grid h-full min-h-[calc(100vh_-_80px)] w-full place-content-center'>
      {<Icons.spinner />}
    </div>
  )
}
