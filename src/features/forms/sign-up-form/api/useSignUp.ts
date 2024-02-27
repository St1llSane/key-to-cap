import { instance } from '@/shared/api/axiosInstance'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'
import { FieldValues, UseFormReset } from 'react-hook-form'
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
    onError: (error) => {
      console.log('error', error)
    }
  })

  return useMemo(() => {
    return { mutateAsync, isPending }
  }, [mutateAsync, isPending])
}
