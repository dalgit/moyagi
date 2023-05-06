import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IPost } from '@/types/post'
import { getChannelPostsById } from '@/utils/api'

export const useChannelPosts = (
  channelId: string,
): UseQueryResult<IPost[], AxiosError> => {
  return useQuery(['channelPosts', channelId], () =>
    getChannelPostsById(channelId),
  )
}
