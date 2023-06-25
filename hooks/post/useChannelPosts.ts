import {
  UseQueryResult,
  useQuery,
  UseQueryOptions,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useCallback } from 'react'
import { IPost } from 'types/post'
import client from 'utils/axios/client'
import { postKeys } from 'utils/queryKeys/post'

const useChannelPosts = (
  channelId: string,
  options?: UseQueryOptions<IPost[], AxiosError, IPost[], string[]>,
): UseQueryResult<IPost[], AxiosError> =>
  useQuery(postKeys.channels(channelId), () => getChannelPostsById(channelId), {
    select: useCallback(
      (posts: IPost[]) =>
        posts.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        ),
      [],
    ),
    ...options,
  })

export default useChannelPosts

const getChannelPostsById = async (channelId: string): Promise<IPost[]> =>
  await client.get(`/channels/${channelId}/posts`).then((res) => res.data)
