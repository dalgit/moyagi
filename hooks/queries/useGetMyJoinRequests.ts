import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IJoinRequest } from '@/types/joinRequest'
import { getMyJoinRequests } from '@/utils/api'

export const useGetMyJoinRequests = (): UseQueryResult<
  IJoinRequest[],
  AxiosError
> => {
  return useQuery(['myJoinRequests'], getMyJoinRequests)
}
