import {
  useQuery,
  UseQueryOptions,
  useQueryClient,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useChannel } from 'hooks/channel'
import { IPost } from 'types/post'
import client from 'utils/axios/client'
import { postKeys } from 'utils/queryKeys/post'
import { userKeys } from 'utils/queryKeys/user'

const useChannelPostsQuery = <T = IPost[]>(
  options?: UseQueryOptions<IPost[], AxiosError, T>,
) => {
  const queryClient = useQueryClient()
  const { _id: channelId } = useChannel()

  return useQuery<IPost[], AxiosError, T>({
    queryKey: postKeys.channels(channelId),

    queryFn: async () => {
      const posts = await getChannelPostsById(channelId)

      posts.forEach(({ author }) => {
        queryClient.setQueryData(userKeys.detail(author._id), author)
      })

      return posts
    },

    enabled: !!channelId && (options?.enabled ?? true),
    staleTime: 1000 * 5,
    ...options,
  })
}
export default useChannelPostsQuery

const getChannelPostsById = async (channelId: string): Promise<IPost[]> =>
  await client.get(`/channels/${channelId}/posts`).then((res) => res.data)
