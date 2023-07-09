import axios, { AxiosError } from 'axios'

export enum AuthError {
  AccessTokenExpiredError = 'AccessTokenExpiredError',
  RefreshTokenExpiredError = 'RefreshTokenExpiredError',
  TokenNotFoundError = 'TokenNotFoundError',
}

export interface ErrorResponse {
  message?: string
  errorType?: AuthError
}

export type CustomAxiosError = AxiosError<ErrorResponse>

export const isAuthError = (errorType: string | undefined) => {
  return Object.values(AuthError).includes(errorType as AuthError)
}

export const isAxiosError = (error: unknown): error is CustomAxiosError => {
  return axios.isAxiosError(error)
}
