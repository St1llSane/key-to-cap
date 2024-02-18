import axios from 'axios'

// import { refreshTokens } from './refreshTokens'

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
  // const time = Number(localStorage.getItem('accessTokenExpireTime'))

  try {
    // if (new Date().getTime() > time) {
    //   const accessTokenExpireTime = await refreshTokens()

    //   localStorage.setItem('accessTokenExpireTime', accessTokenExpireTime)
    // }

    const { data } = await axios({
      method,
      url: `${process.env.NEXT_PUBLIC_SERVER_HOST}/${url}`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: body,
      withCredentials
    })

    if (data.accessTokenExpireTime) {
      localStorage.setItem(
        'accessTokenExpireTime',
        data.accessTokenExpireTime
      )
    }

    return data
  } catch (error) {
    console.log('error', error)
  }

  return
}
