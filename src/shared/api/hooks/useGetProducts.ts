import {
  NavCategory,
  NavData,
  navData
} from '@/features/nav/constants/constants'
import { QueryKeys } from '@/shared/types/enums'
import { typeObjectKeys } from '@/shared/utils/typeObjectKeys'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { instance } from '../axiosInstance'

export const useGetProducts = () => {
  const [filteredNavData, setFilteredNavData] = useState<{
    [k: string]: NavData
  } | null>(null)

  const getProducts = async () => {
    const { data } = await instance.get('products/')

    return data
  }

  const { data, isPending, isSuccess } = useQuery({
    queryKey: [QueryKeys.Products],
    queryFn: getProducts,
    retry: 0,
    refetchOnWindowFocus: false
  })

  useEffect(() => {
    if (isSuccess) {
      const filteredNavData: Record<NavCategory, NavData> = typeObjectKeys(
        navData
      ).reduce(
        (acc, key) => {
          acc[key] = navData[key]
          acc[key].products = data[key]

          return acc
        },
        {} as Record<NavCategory, NavData>
      )

      setFilteredNavData(filteredNavData)
    }
  }, [data, isSuccess])

  return { data: filteredNavData, isPending }
}
