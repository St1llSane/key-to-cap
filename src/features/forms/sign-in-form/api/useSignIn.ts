import { useMemo } from 'react'

import { useRouter } from 'next/navigation'

import { useMutation } from '@tanstack/react-query'
import { FieldValues, UseFormReset } from 'react-hook-form'

import { instance } from '@/shared/api/axiosInstance'
import Toasts from '@/shared/ui/toasts'

import { fields } from '../sign-in-form'

export const useSignIn = (
  formValues: FieldValues,
  reset: UseFormReset<fields>
) => {
  const router = useRouter()

  const signIn = async () => {
    const { data } = await instance.post('auth/sign-in/', formValues)

    return data
  }

  const { mutateAsync, isPending } = useMutation({
    mutationFn: signIn,
    onSuccess: () => {
      router.replace('/profile')
      router.refresh()
      reset()
    },
    onError: (error) => {
      console.log('error', error)
      Toasts.error({
        title: 'Error Signing In'
      })
    }
  })

  return useMemo(() => {
    return { mutateAsync, isPending }
  }, [mutateAsync, isPending])
}
