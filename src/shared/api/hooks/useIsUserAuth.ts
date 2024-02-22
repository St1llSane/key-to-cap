import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { QueryKey } from '../../types/enums'
// import { instance } from '../api/axiosInstance'
import { axiosWithRefresh } from '../axiosWithRefresh'

export const useIsUserAuth = ({ redirectTo }: { redirectTo: string }) => {
  const router = useRouter()

  const isAuth = async () => {
    // const data = await instance.post('is-auth/')
    const data = await axiosWithRefresh({
      method: 'post',
      url: 'is-auth/'
    })

    return data
  }

  const { data: isUserAuth, isPending } = useQuery({
    queryKey: [QueryKey.IsUserAuth],
    queryFn: isAuth,
    refetchOnWindowFocus: false,
    refetchOnMount: false
  })

  useEffect(() => {
    if (!isUserAuth) router.push(redirectTo)
  }, [router, isUserAuth, redirectTo])

  return { isUserAuth, isPending }

  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_SERVER_HOST}/is-auth/`,
  //   {
  //     method: 'POST',
  //     credentials: 'include'
  //   }
  // )

  // return response.json()
}
