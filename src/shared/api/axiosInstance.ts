import axios from 'axios'
import { refreshTokens } from './refreshTokens'

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_HOST,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true,
  validateStatus: (status) => {
    return status >= 200 && status < 400
  }
})

instance.interceptors.request.use(
  async (config) => {
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

let requestAttempts = 0

instance.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const originalRequest = error.config

    if (error.response.status === 401 && requestAttempts < 1) {
      requestAttempts++
      await refreshTokens()

      return instance(originalRequest)
    }

    return Promise.reject(error)
  }
)
