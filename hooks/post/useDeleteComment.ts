import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IComment, IPost } from 'types/post'
import client from 'utils/axios/client'
import { postKeys } from 'utils/queryKeys/post'

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
    onMutate: ({ channelId, postId, commentId }) => {
      const previousPosts = queryClient.getQueryData<IPost[]>(
        postKeys.list(channelId),
      )

      const updatedPosts = previousPosts?.map((post) => {
        if (post._id === postId) {
          const updatedComments = post.comments.filter(
            (comment) => comment._id !== commentId,
          )
          return { ...post, comments: updatedComments }
        }
        return post
      })

      queryClient.setQueryData<IPost[]>(postKeys.list(channelId), updatedPosts)

      return { previousPosts }
    },

    onError: (_, { channelId }, context) => {
      if (context?.previousPosts) {
        queryClient.setQueryData<IPost[]>(
          postKeys.list(channelId),
          context.previousPosts,
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
