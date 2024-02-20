import axios from 'axios'

export const refreshTokens = async () => {
  const data = await axios({
    method: 'post',
    url: `${process.env.NEXT_PUBLIC_SERVER_HOST}/refresh/`,
    withCredentials: true
  })

  if (data.status === 401) {
    throw new Error(data.statusText)
  }

  return data.data.access_token_expire_time
}
