import { axiosInstance } from '@/shared/api/axiosInstance'
import { QueryKey } from '@/shared/types/enums'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

export const useGetProducts = () => {
  const getProducts = async () => {
    try {
      const data = await axiosInstance('get', 'products/')

      return data
    } catch (error) {
      console.log('error', error)
    }
  }

  const { data, isPending, isSuccess } = useQuery({
    queryKey: [QueryKey.products],
    queryFn: getProducts
  })

  return useMemo(() => {
    return { data, isPending, isSuccess }
  }, [data, isPending, isSuccess])
}
