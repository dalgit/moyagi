import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IRegistration } from '@/types/registration'
import { getMyRegistrations } from '@/utils/api'

export const useMyRegistrations = (): UseQueryResult<
  IRegistration[],
  AxiosError
> => {
  return useQuery(['myRegistrations'], getMyRegistrations)
}
