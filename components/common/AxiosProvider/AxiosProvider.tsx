import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { useEffect, ReactNode } from 'react'
import { useLogoutUser } from 'hooks/auth'
import { useToast } from 'hooks/common'
import client from 'utils/axios/client'

interface ErrorResponse {
  status?: string
  errorType?:
    | 'AccessTokenExpiredError'
    | 'RefreshTokenExpiredError'
    | 'TokenNotFoundError'
}

interface AxiosProviderProps {
  children: ReactNode
}

const AxiosProvider = ({ children }: AxiosProviderProps) => {
  const { onToast } = useToast()
  const { mutate } = useLogoutUser()

  useEffect(() => {
    const resInterceptor = async (res: AxiosResponse) => {
      return res
    }

    const errInterceptor = async (error: AxiosError<ErrorResponse>) => {
      const errorType = error.response?.data.errorType

      if (error.response?.status === 401) {
        if (errorType === 'AccessTokenExpiredError') {
          const originalRequest = error.config as AxiosRequestConfig
          try {
            await client.post('/auth/refresh')
            return client(originalRequest)
          } catch (e) {
            mutate({})
            onToast({
              content: '로그인이 만료되었습니다.',
              type: 'error',
            })
          }
        }

        if (errorType === 'TokenNotFoundError') {
          mutate({})
          onToast({
            content: '로그인 후 이용해주세요.',
            type: 'error',
          })
        }
      }

      return Promise.reject(error)
    }

    const interceptor = client.interceptors.response.use(
      resInterceptor,
      errInterceptor,
    )

    return () => client.interceptors.response.eject(interceptor)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <>{children}</>
}

export default AxiosProvider
