import { AxiosError, AxiosResponse } from 'axios'
import { useEffect, ReactNode } from 'react'
import { useLogoutUser } from 'hooks/auth'
import { useToast } from 'hooks/common'
import client from 'utils/axios/client'
import {
  authInterceptor,
  isAuthError,
  AuthError,
} from './interceptors/authInterceptor'

export interface ErrorResponse {
  message?: string
  status?: string
  errorType?: AuthError
}

interface AxiosProviderProps {
  children: ReactNode
}

const AxiosProvider = ({ children }: AxiosProviderProps) => {
  const { onToast } = useToast()
  const { mutate: logout } = useLogoutUser()

  useEffect(() => {
    const resInterceptor = async (res: AxiosResponse) => {
      return res
    }

    const errInterceptor = async (error: AxiosError<ErrorResponse>) => {
      const errorType = error.response?.data.errorType
      if (isAuthError(errorType)) {
        authInterceptor(error, () => logout({}), onToast)
      } else if (error.response?.data?.message) {
        onToast({
          content: error.response.data.message,
          type: 'error',
        })
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
