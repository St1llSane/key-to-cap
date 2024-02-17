import axios from 'axios'

type ReqMethod = 'get' | 'post'
type ReqBody =
  | { [k: string]: string | number | boolean | Date }
  | null
  | undefined

export const axiosInstance = async (
  method: ReqMethod,
  url: string,
  body?: ReqBody,
  withCredentials?: boolean
) => {
  return await axios({
    method,
    url: `${process.env.NEXT_PUBLIC_SERVER_HOST}/${url}`,
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    withCredentials
  })
}
