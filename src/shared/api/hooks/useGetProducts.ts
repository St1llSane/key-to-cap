import { useQuery } from '@tanstack/react-query'

import { QueryKeys } from '@/shared/types/enums'
import { Products } from '@/shared/types/types'

import { instance } from '../axiosInstance'

export const useGetProducts = () => {
  const getProducts = async () => {
    const { data } = await instance.get<Products>('products/')

    return data
  }

  const { data, isPending } = useQuery({
    queryKey: [QueryKeys.Products],
    queryFn: getProducts,
    retry: 1,
    refetchOnWindowFocus: false
  })

  // useEffect(() => {
  //   if (isSuccess) {
  //     const filteredNavData: Products = typeObjectKeys(navData).reduce(
  //       (acc, key) => {
  //         acc[key] = navData[key]
  //         acc[key].products = data[key]

  //         return acc
  //       },
  //       {} as Products
  //     )

  //     setFilteredNavData(filteredNavData)
  //   }
  // }, [data, isSuccess])

  return { data, isPending }
}
