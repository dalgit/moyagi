import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IUser } from '@/types/user'
import { getMyInformation } from '@/utils/api'
import { userKeys } from '@/utils/queryKeys/user'

export const useMyInformation = (): UseQueryResult<IUser, AxiosError> => {
  return useQuery(userKeys.detail('me'), getMyInformation)
}
