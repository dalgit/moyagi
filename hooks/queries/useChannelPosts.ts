import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IPost } from '@/types/post'
import { getChannelPostsById } from '@/utils/api'
import { postKeys } from '@/utils/queryKeys/post'

export const useChannelPosts = (
  channelId: string,
): UseQueryResult<IPost[], AxiosError> => {
  return useQuery(postKeys.channel(channelId), () =>
    getChannelPostsById(channelId),
  )
}
