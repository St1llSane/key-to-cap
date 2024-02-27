import { instance } from '@/shared/api/axiosInstance'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'
import { FieldValues, UseFormReset } from 'react-hook-form'
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
    }
  })

  return useMemo(() => {
    return { mutateAsync, isPending }
  }, [mutateAsync, isPending])
}
