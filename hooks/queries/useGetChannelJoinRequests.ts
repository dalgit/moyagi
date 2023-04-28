import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { IJoinRequest } from '@/types/joinRequest'
import { getChannelJoinRequests } from '@/utils/api'

export const useGetChannelJoinRequests = (
  channelId: string,
  options: UseQueryOptions<IJoinRequest[], Error>,
) => {
  return useQuery<IJoinRequest[], Error>(
    ['channelJoinRequests', channelId],
    () => getChannelJoinRequests(channelId),
    options,
  )
}
