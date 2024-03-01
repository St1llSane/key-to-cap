import { useEffect, useMemo } from 'react'

import { useRouter } from 'next/navigation'

import { useQuery } from '@tanstack/react-query'

import { instance } from '@/shared/api/axiosInstance'
import { QueryKey } from '@/shared/types/enums'
import { UserPublic } from '@/shared/types/types'

export const useGetUser = () => {
  const router = useRouter()

  const getUser = async () => {
    const { data } = await instance.get<UserPublic>('users/user/')

    return data
  }

  const { data, isPending } = useQuery({
    queryKey: [QueryKey.User],
    queryFn: getUser,
    retry: 1,
    refetchOnWindowFocus: false
  })

  useEffect(() => {
    if (!data) {
      return router.replace('/sign-in')
    }
  }, [data, router])

  return useMemo(() => {
    return { user: data!, isPending }
  }, [data, isPending])
}
