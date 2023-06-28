import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IComment } from 'types/post'
import client from 'utils/axios/client'
import { commentKeys } from 'utils/queryKeys/post'

interface deleteCommentArgs {
  postId: string
  channelId: string
  commentId: string
}

const useDeleteComment = (): UseMutationResult<
  IComment,
  AxiosError,
  deleteCommentArgs
> => {
  const queryClient = useQueryClient()

  return useMutation(deleteComment, {
    onMutate: ({ postId, commentId }) => {
      const previousComments = queryClient.getQueryData<IComment[]>(
        commentKeys.posts(postId),
      )

      const updatedComments = previousComments?.filter(
        (comment) => comment._id !== commentId,
      )

      queryClient.setQueryData<IComment[]>(
        commentKeys.posts(postId),
        updatedComments,
      )

      return { previousComments }
    },

    onError: (_, { postId }, context) => {
      if (context?.previousComments) {
        queryClient.setQueryData<IComment[]>(
          commentKeys.posts(postId),
          context.previousComments,
        )
      }
    },
  })
}

export default useDeleteComment

const deleteComment = async ({
  channelId,
  postId,
  commentId,
}: deleteCommentArgs): Promise<IComment> =>
  await client
    .delete(`/channels/${channelId}/posts/${postId}/comments/${commentId}`)
    .then((res) => res.data)
