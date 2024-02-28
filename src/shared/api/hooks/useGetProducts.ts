import { useEffect, useState } from 'react'

import { useQuery } from '@tanstack/react-query'

import { QueryKeys } from '@/shared/types/enums'
import { typeObjectKeys } from '@/shared/utils/typeObjectKeys'

import { NavProducts, navData } from '@/features/nav/constants/constants'

import { instance } from '../axiosInstance'

export const useGetProducts = () => {
  const [filteredNavData, setFilteredNavData] =
    useState<NavProducts | null>(null)

  const getProducts = async () => {
    const { data } = await instance.get('products/')

    return data
  }

  const { data, isPending, isSuccess } = useQuery({
    queryKey: [QueryKeys.Products],
    queryFn: getProducts,
    retry: 1,
    refetchOnWindowFocus: false
  })

  useEffect(() => {
    if (isSuccess) {
      const filteredNavData: NavProducts = typeObjectKeys(navData).reduce(
        (acc, key) => {
          acc[key] = navData[key]
          acc[key].products = data[key]

          return acc
        },
        {} as NavProducts
      )

      setFilteredNavData(filteredNavData)
    }
  }, [data, isSuccess])

  return { data: filteredNavData, isPending }
}
