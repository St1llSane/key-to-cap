import { getCookieValue } from '../utils/getCookieValue'
import { instance } from './axiosInstance'
import { refreshTokens } from './refreshTokens'

type ReqMethod = 'get' | 'post'
type ReqBody =
  | { [k: string]: string | number | boolean | Date }
  | undefined

export const axiosWithRefresh = async ({
  method,
  url,
  body
}: {
  method: ReqMethod
  url: string
  body?: ReqBody
}) => {
  const accessTokenExpireTime = getCookieValue('access_token_expire_time')

  try {
    if (
      !!accessTokenExpireTime &&
      new Date().getTime() > Number(accessTokenExpireTime)
    ) {
      // TODO: need to add error handler?
      const access_token_expire_time = await refreshTokens()

      document.cookie = `access_token_expire_time=${access_token_expire_time}`
    }

    const { data } = await instance[method](url, body)

    if (data.access_token_expire_time) {
      document.cookie = `access_token_expire_time=${data.access_token_expire_time}`
    }

    return data
  } catch (error) {
    console.log('error', error)

    throw error
  }
}
