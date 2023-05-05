import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IRegistration } from '@/types/registration'
import { getMyRegistrations } from '@/utils/api'

export const useGetMyRegistrations = (): UseQueryResult<
  IRegistration[],
  AxiosError
> => {
  return useQuery(['myRegistrations'], getMyRegistrations)
}
