import { useRouter } from 'next/navigation'

import { useMutation } from '@tanstack/react-query'
import { FieldValues, UseFormReset } from 'react-hook-form'

import { instance } from '@/shared/api/axiosInstance'
import Toasts from '@/shared/ui/toasts'

import { fields } from '../sign-up-form'

export const useSignUp = (
  formValues: FieldValues,
  reset: UseFormReset<fields>
) => {
  const router = useRouter()

  const signUp = async () => {
    const { data } = await instance.post('auth/sign-up/', formValues)

    return data
  }

  const { mutateAsync, isPending } = useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      router.replace('/profile')
      router.refresh()
      reset()
    },
    onError: () => {
      Toasts.error({
        title: 'Error Signing Up'
      })
    }
  })

  return { mutateAsync, isPending }
}
