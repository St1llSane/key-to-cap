import axios from 'axios'

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
