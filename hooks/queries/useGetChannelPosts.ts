import { useQuery } from '@tanstack/react-query'
import { getChannelPostsById } from '@/utils/api'

export const useGetChannelPosts = (channelId: string, shouldFetch = false) => {
  return useQuery(
    ['channelPosts', channelId],
    () => getChannelPostsById(channelId),
    { enabled: shouldFetch },
  )
}
