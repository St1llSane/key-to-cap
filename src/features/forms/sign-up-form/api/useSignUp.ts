import { axiosInstance } from '@/shared/api/axiosInstance'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'
import { FieldValues } from 'react-hook-form'

export const useSignUp = (
  formValues: FieldValues,
  // TODO: think about need it or not
  // queryKey: (typeof QueryKey)['users']
  queryKey: string
) => {
  const queryClient = useQueryClient()
  const router = useRouter()

  const signUp = async () => {
    try {
      const data = await axiosInstance('post', 'users/', formValues)

      return data
    } catch (error) {
      console.log('error', error)
    }
  }

  const { mutateAsync, isPending, isSuccess } = useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      router.push('/profile')
      // TODO: maybe dont need?
      queryClient.invalidateQueries({ queryKey: [queryKey] })
    },
    onError: (error) => {
      console.log('error', error)
    }
  })

  return useMemo(() => {
    return { mutateAsync, isPending, isSuccess }
  }, [mutateAsync, isPending, isSuccess])
}
