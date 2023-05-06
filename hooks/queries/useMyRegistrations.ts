import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IRegistration } from '@/types/registration'
import { getMyRegistrations } from '@/utils/api'
import { registrationKeys } from '@/utils/queryKeys/registration'

export const useMyRegistrations = (): UseQueryResult<
  IRegistration[],
  AxiosError
> => {
  return useQuery(registrationKeys.list('me'), getMyRegistrations)
}
