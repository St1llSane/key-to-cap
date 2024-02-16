import { axiosInstance } from '@/shared/api/axiosInstance'
import { QueryKey } from '@/shared/types/enums'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { NavCategory, NavDataInfo, navData } from '../constants/constants'

export const useGetProducts = () => {
  const [filteredNavData, setFilteredNavData] = useState<{
    [k: string]: NavDataInfo
  } | null>(null)

  const getProducts = async () => {
    try {
      const { data } = await axiosInstance('get', 'products/')

      return data
    } catch (error) {
      console.log('error', error)
    }
  }

  const { data, isPending, isSuccess } = useQuery({
    queryKey: [QueryKey.Products],
    queryFn: getProducts
  })

  useEffect(() => {
    if (isSuccess) {
      // TODO: find an options to typed it more carefully
      const filteredNavData: Record<NavCategory, NavDataInfo> =
        Object.keys(navData).reduce(
          (acc, key) => {
            acc[key as NavCategory] = navData[key as NavCategory]
            acc[key as NavCategory].products = data[key as NavCategory]

            return acc
          },
          {} as Record<NavCategory, NavDataInfo>
        )

      setFilteredNavData(filteredNavData)
    }
  }, [data, isSuccess])

  return { data: filteredNavData, isPending }
}
