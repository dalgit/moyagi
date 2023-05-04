import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IUser } from '@/types/user'
import { getMyInformation } from '@/utils/api'

export const useGetMyInformation = (): UseQueryResult<IUser, AxiosError> => {
  return useQuery(['users', 'me'], getMyInformation)
}
