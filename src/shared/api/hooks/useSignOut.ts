import { useMemo } from 'react'

import { useRouter } from 'next/navigation'

import { useMutation } from '@tanstack/react-query'

import Toasts from '@/shared/ui/toasts'

import { instance } from '../axiosInstance'

export const useSignOut = () => {
  const router = useRouter()

  const signOut = async () => {
    return await instance.post('sign-out/')
  }

  const { mutateAsync, isPending } = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      router.replace('/')
      router.refresh()
    },
    onError: () => {
      Toasts.error({
        title: 'Error Signing Out'
      })
    }
  })

  return useMemo(() => {
    return { mutateAsync, isPending }
  }, [mutateAsync, isPending])
}
