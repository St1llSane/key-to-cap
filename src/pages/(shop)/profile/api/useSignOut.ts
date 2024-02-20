import { axiosInstance } from '@/shared/api/axiosInstance'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'

export const useSignOut = () => {
  const router = useRouter()

  const signOut = async () => {
    const data = await axiosInstance({
      method: 'post',
      url: 'sign-out/',
      withCredentials: true
    })

    return data
  }

  const { mutateAsync, isPending } = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      localStorage.removeItem('access_token_expire_time')
      router.push('/')
    },
    onError: (error) => {
      console.log('error', error)
    }
  })

  return useMemo(() => {
    return { mutateAsync, isPending }
  }, [mutateAsync, isPending])
}
