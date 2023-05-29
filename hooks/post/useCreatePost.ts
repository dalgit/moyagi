import {
  useMutation,
  useQueryClient,
  UseMutationResult,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IPost } from 'types/post'
import client from 'utils/axios/axios'
import { postKeys } from 'utils/queryKeys/post'

interface createPostArgs {
  channelId: string
  content: string
}

const useCreatePost = (
  channelId: string,
): UseMutationResult<IPost, AxiosError, createPostArgs> => {
  const queryClient = useQueryClient()

  return useMutation(createPost, {
    onSuccess: (newPost) => {
      queryClient.setQueryData<IPost[]>(
        postKeys.list(channelId),
        (previousPosts = []) => [newPost, ...previousPosts],
      )

      queryClient.setQueryData<IPost[]>(postKeys.me(), (previousPosts = []) => [
        newPost,
        ...previousPosts,
      ])

      alert('작성이 완료되었습니다.')
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
