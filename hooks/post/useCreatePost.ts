import {
  useMutation,
  useQueryClient,
  UseMutationResult,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useToast } from 'hooks/common'
import { IPost } from 'types/post'
import client from 'utils/axios/client'
import { postKeys } from 'utils/queryKeys/post'

interface createPostArgs {
  channelId: string
  content: string
}

const useCreatePost = (): UseMutationResult<
  IPost,
  AxiosError,
  createPostArgs
> => {
  const queryClient = useQueryClient()
  const { onToast } = useToast()
  return useMutation(createPost, {
    onSuccess: (_, { channelId }) => {
      queryClient.invalidateQueries(postKeys.channels(channelId))
      onToast({ content: '작성이 완료되었습니다.', type: 'success' })
    },
  })
}

export default useCreatePost

const createPost = async ({
  channelId,
  content,
}: createPostArgs): Promise<IPost> =>
  await client
    .post(`/channels/${channelId}/posts`, { content })
    .then((res) => res.data)
