import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IPost } from '@/types/post'
import client from '@/utils/axios/axios'
import { postKeys } from '@/utils/queryKeys/post'

interface deletePostArgs {
  postId: string
  channelId: string
}

export const useDeletePost = (): UseMutationResult<
  IPost,
  AxiosError,
  deletePostArgs
> => {
  const queryClient = useQueryClient()

  return useMutation(deletePost, {
    onSuccess: (_, { postId, channelId }) => {
      queryClient.setQueryData<IPost[]>(
        postKeys.channel(channelId),
        (previous) => previous?.filter((post) => post._id !== postId),
      )

      alert('삭제가 완료되었습니다.')
    },
  })
}

const deletePost = async ({
  channelId,
  postId,
}: deletePostArgs): Promise<IPost> =>
  await client.delete(`/channels/${channelId}/posts/${postId}`)
