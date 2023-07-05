import { AxiosError, AxiosRequestConfig } from 'axios'
import { IToast } from 'recoil/toast/toastAtom'
import client from 'utils/axios/client'
import { ErrorResponse } from '../AxiosProvider'

export enum AuthError {
  AccessTokenExpiredError = 'AccessTokenExpiredError',
  RefreshTokenExpiredError = 'RefreshTokenExpiredError',
  TokenNotFoundError = 'TokenNotFoundError',
}

export const isAuthError = (errorType: string | undefined) => {
  return Object.values(AuthError).includes(errorType as AuthError)
}

export const authInterceptor = async (
  error: AxiosError<ErrorResponse>,
  logoutFn: () => void,
  onToast: (toast: IToast) => void,
) => {
  const errorType = error.response?.data.errorType

  const handleAuthError = (message: string) => {
    logoutFn()
    onToast({
      content: message,
      type: 'error',
    })
  }

  if (errorType === AuthError.AccessTokenExpiredError) {
    const originalRequest = error.config as AxiosRequestConfig
    try {
      await client.post('/auth/refresh')
      return client(originalRequest)
    } catch (e) {
      handleAuthError('로그인이 만료되었습니다.')
    }
  }

  if (errorType === AuthError.TokenNotFoundError) {
    handleAuthError('로그인 후 이용해주세요.')
  }
}
