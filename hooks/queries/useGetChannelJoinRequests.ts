import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IJoinRequest } from '@/types/joinRequest'
import { getChannelJoinRequests } from '@/utils/api'

export const useGetChannelJoinRequests = (
  channelId: string,
  options?: UseQueryOptions<IJoinRequest[], AxiosError>,
): UseQueryResult<IJoinRequest[], AxiosError> => {
  return useQuery<IJoinRequest[], AxiosError>(
    ['channelJoinRequests', channelId],
    () => getChannelJoinRequests(channelId),
    options,
  )
}
