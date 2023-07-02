import {
  useQuery,
  useQueryClient,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IComment, IPost } from 'types/post'
import client from 'utils/axios/client'
import { commentKeys, postKeys } from 'utils/queryKeys/post'
import { userKeys } from 'utils/queryKeys/user'

const useCommentsQuery = (
  channelId: string,
  postId: string,
  options?: UseQueryOptions<IComment[], AxiosError>,
): UseQueryResult<IComment[], AxiosError> => {
  const queryClient = useQueryClient()

  return useQuery({
    queryKey: commentKeys.posts(postId),
    queryFn: async () => {
      const comments = await getPostComments(channelId, postId)

      comments?.forEach((author) => {
        queryClient.setQueryData(userKeys.detail(author._id), author)
      })

      return comments
    },
    initialData: () =>
      queryClient
        .getQueryData<IPost[]>(postKeys.channels(channelId))
        ?.find((post) => post._id === postId)?.comments,
    staleTime: 1000 * 10,
    ...options,
  })
}

export default useCommentsQuery

const getPostComments = async (
  channelId: string,
  postId: string,
): Promise<IComment[]> =>
  await client
    .get(`/channels/${channelId}/posts/${postId}/comments`)
    .then((res) => res.data)
