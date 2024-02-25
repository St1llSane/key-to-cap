import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'
import { instance } from '../axiosInstance'

export const useSignOut = () => {
  const router = useRouter()

  const signOut = async () => {
    await instance.post('sign-out/')
  }

  const { mutateAsync, isPending } = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      router.replace('/')
    },
    onError: (error) => {
      console.log('error', error)
    }
  })

  return useMemo(() => {
    return { mutateAsync, isPending }
  }, [mutateAsync, isPending])
}
