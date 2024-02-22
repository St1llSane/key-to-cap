import { instance } from './axiosInstance'

export const refreshTokens = async () => {
  const data = await instance.post('refresh/')

  if (data.status === 401) throw new Error(data.statusText)

  return data.data.access_token_expire_time
}
