import { useQuery } from '@tanstack/react-query'
import { IPost } from '@/types/post'
import { getChannelPostsById } from '@/utils/api'

export const useGetChannelPosts = (channelId: string, shouldFetch = false) => {
  return useQuery<IPost[], Error>(
    ['channelPosts', channelId],
    () => getChannelPostsById(channelId),
    {
      enabled: shouldFetch,
    },
  )
}
