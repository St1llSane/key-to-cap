import { axiosWithRefresh } from '@/shared/api/axiosWithRefresh'
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
    const data = await axiosWithRefresh({
      method: 'post',
      url: 'auth/sign-in/',
      body: formValues
    })

    return data
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
