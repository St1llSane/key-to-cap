import { instance } from './axiosInstance'

export const refreshToken = async () => {
  return await instance.post('refresh/')
}
