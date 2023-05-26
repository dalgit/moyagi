import {
  UseQueryResult,
  useQuery,
  UseQueryOptions,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IPost } from 'types/post'
import client from 'utils/axios/axios'
import { postKeys } from 'utils/queryKeys/post'

export const useChannelPosts = (
  channelId: string,
  options?: UseQueryOptions<IPost[], AxiosError, IPost[], string[]>,
): UseQueryResult<IPost[], AxiosError> => {
  return useQuery(
    postKeys.list(channelId),
    () => getChannelPostsById(channelId),
    options,
  )
}

const getChannelPostsById = async (channelId: string): Promise<IPost[]> =>
  await client.get(`/channels/${channelId}/posts`).then((res) => res.data)
