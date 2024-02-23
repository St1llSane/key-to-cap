import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { QueryKey } from '../../types/enums'
import { instance } from '../axiosInstance'

export const useIsUserAuth = ({ redirectTo }: { redirectTo: string }) => {
  const router = useRouter()

  const isAuth = async () => {
    const { data } = await instance.post('is-auth/')

    return data
  }

  const { data: isUserAuth, isPending } = useQuery({
    queryKey: [QueryKey.IsUserAuth],
    queryFn: isAuth,
    refetchOnWindowFocus: false,
    refetchOnMount: false
  })

  useEffect(() => {
    if (!isPending && !isUserAuth) {
      router.push(redirectTo)
    }
  }, [router, isPending, isUserAuth, redirectTo])

  return { isUserAuth, isPending }
}
