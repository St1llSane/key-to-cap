import { axiosInstance } from '@/shared/api/axiosInstance'
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
    try {
      const data = await axiosInstance({
        method: 'post',
        url: 'auth/login/',
        body: formValues,
        withCredentials: true
      })

      return data
    } catch (error) {
      console.log('error', error)
    }
  }

  const { mutateAsync, isPending } = useMutation({
    mutationFn: signIn,
    onSuccess: () => {
      reset()
      router.push('/profile')
    },
    onError: (error) => {
      console.log('error', error)
    }
  })

  return useMemo(() => {
    return { mutateAsync, isPending }
  }, [mutateAsync, isPending])
}
