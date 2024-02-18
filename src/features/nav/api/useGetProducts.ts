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
      const data = await axiosInstance({
        method: 'get',
        url: 'products/',
        withCredentials: true
      })

      return data
    } catch (error) {
      console.log('error', error)
    }
  }

  const { data, isPending, isSuccess } = useQuery({
    queryKey: [QueryKey.Products],
    queryFn: getProducts
  })

  const objectKeys = <Obj extends object>(obj: Obj): (keyof Obj)[] => {
    return Object.keys(obj) as (keyof Obj)[]
  }

  useEffect(() => {
    if (isSuccess) {
      // TODO: find an options to typed it more carefully
      const filteredNavData: Record<NavCategory, NavDataInfo> = objectKeys(
        navData
      ).reduce(
        (acc, key) => {
          acc[key] = navData[key]
          acc[key].products = data[key]

          return acc
        },
        {} as Record<NavCategory, NavDataInfo>
      )

      setFilteredNavData(filteredNavData)
    }
  }, [data, isSuccess])

  return { data: filteredNavData, isPending }
}
