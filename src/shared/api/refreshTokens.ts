import { instance } from './axiosInstance'

export const refreshTokens = async () => {
  return await instance.post('refresh/')
}
