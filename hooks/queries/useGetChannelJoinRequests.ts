import { useQuery } from '@tanstack/react-query'
import { getChannelJoinRequests } from '@/utils/api'

export const useGetChannelJoinRequests = (
  channelId: string,
  options: object,
) => {
  return useQuery(
    ['channelJoinRequests', channelId],
    () => getChannelJoinRequests(channelId),
    options,
  )
}
