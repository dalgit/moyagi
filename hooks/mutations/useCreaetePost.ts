import {
  useMutation,
  useQueryClient,
  UseMutationResult,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IPost } from '@/types/post'
import client from '@/utils/axios/axios'
import { postKeys } from '@/utils/queryKeys/post'

interface createPostArgs {
  channelId: string
  content: string
}

export const useCreatePost = (
  channelId: string,
): UseMutationResult<IPost, AxiosError, createPostArgs> => {
  const queryClient = useQueryClient()

  return useMutation(createPost, {
    onSuccess: () => {
      queryClient.setQueriesData<IPost[]>(
        postKeys.channel(channelId),
        (previous) => previous?.filter((post) => post._id !== postId),
      )

      queryClient.invalidateQueries(postKeys.channel(channelId))
      alert('작성이 완료되었습니다.')
    },
  })
}

const createPost = async ({
  channelId,
  content,
}: createPostArgs): Promise<IPost> =>
  await client.post(`/channels/${channelId}/posts`, { content })
