import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { AuthError, CustomAxiosError } from 'types/error'

const baseURL = process.env.NEXT_PUBLIC_BASE_URL

const client = axios.create({
  baseURL,
  withCredentials: true,
})

const resInterceptor = async (res: AxiosResponse) => {
  return res
}

const errInterceptor = async (error: CustomAxiosError) => {
  const errorType = error.response?.data.errorType

  if (errorType === AuthError.AccessTokenExpiredError) {
    handleRefresh(error)
  }

  if (errorType === AuthError.TokenNotFoundError) {
    handleLogout('로그인후 이용해주세요.')
  }

  return Promise.reject(error)
}

client.interceptors.response.use(resInterceptor, errInterceptor)

export default client

const handleRefresh = async (error: CustomAxiosError) => {
  const originalRequest = error.config as AxiosRequestConfig

  try {
    await client.post('/auth/refresh')
    return client(originalRequest)
  } catch (error) {
    handleLogout('로그인이 만료되었습니다.')
  }
}

const handleLogout = (message: string) => {
  window.location.href = '/oauth/logout-callback'
  alert(message)
  return Promise.reject()
}
