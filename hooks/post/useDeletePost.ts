import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useToast } from 'hooks/common'
import { IPost } from 'types/post'
import client from 'utils/axios/client'
import { postKeys } from 'utils/queryKeys/post'

interface deletePostArgs {
  postId: string
  channelId: string
}

const useDeletePost = (): UseMutationResult<
  IPost,
  AxiosError,
  deletePostArgs
> => {
  const queryClient = useQueryClient()
  const { onToast } = useToast()

  return useMutation(deletePost, {
    onMutate: ({ channelId, postId }) => {
      const previousPosts = queryClient.getQueryData<IPost[]>(
        postKeys.list(channelId),
      )

      const updatedPosts = previousPosts?.filter((post) => post._id !== postId)

      queryClient.setQueryData<IPost[]>(postKeys.list(channelId), updatedPosts)

      onToast({ content: '삭제가 완료되었습니다.', type: 'success' })
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

export default useDeletePost

const deletePost = async ({
  channelId,
  postId,
}: deletePostArgs): Promise<IPost> =>
  await client
    .delete(`/channels/${channelId}/posts/${postId}`)
    .then((res) => res.data)
