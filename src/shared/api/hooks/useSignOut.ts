import { axiosWithRefresh } from '@/shared/api/axiosWithRefresh'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'

export const useSignOut = () => {
  const router = useRouter()

  const signOut = async () => {
    const data = await axiosWithRefresh({
      method: 'post',
      url: 'sign-out/'
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
