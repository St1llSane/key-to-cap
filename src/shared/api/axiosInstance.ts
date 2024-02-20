import axios from 'axios'
import { refreshTokens } from './refreshTokens'

type ReqMethod = 'get' | 'post'
type ReqBody =
  | { [k: string]: string | number | boolean | Date }
  | undefined

export const axiosInstance = async ({
  method,
  url,
  body,
  withCredentials = false
}: {
  method: ReqMethod
  url: string
  body?: ReqBody
  withCredentials?: boolean
}) => {
  // TODO: maybe need to refactor to cookie?
  // TODO: need to clean up LS after sign out
  const time = Number(localStorage.getItem('access_token_expire_time'))

  try {
    if (!!time && new Date().getTime() > time) {
      // TODO: need to add error handler?
      const access_token_expire_time = await refreshTokens()

      localStorage.setItem(
        'access_token_expire_time',
        access_token_expire_time
      )
    }

    const { data } = await axios({
      method,
      url: `${process.env.NEXT_PUBLIC_SERVER_HOST}/${url}`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: body,
      withCredentials,
      validateStatus: (status) => {
        return status >= 200 && status < 400
      }
    })

    if (data.access_token_expire_time) {
      localStorage.setItem(
        'access_token_expire_time',
        data.access_token_expire_time
      )
    }

    return data
  } catch (error) {
    console.log('error', error)

    throw error
  }
}
