import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IPost } from 'types/post'
import client from 'utils/axios/client'
import { commentKeys } from 'utils/queryKeys/post'

interface CreateCommentParams {
  channelId: string
  postId: string
  content: string
}

const useCreateComment = (): UseMutationResult<
  IPost,
  AxiosError,
  CreateCommentParams
> => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createComment,
    onSuccess: (_, { postId }) => {
      queryClient.invalidateQueries(commentKeys.posts(postId))
    },
  })
}

export default useCreateComment

const createComment = async ({
  channelId,
  postId,
  content,
}: CreateCommentParams): Promise<IPost> =>
  await client
    .post(`/channels/${channelId}/posts/${postId}/comments`, { content })
    .then((res) => res.data)
