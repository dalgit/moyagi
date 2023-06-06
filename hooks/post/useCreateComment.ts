import { useMutation, UseMutationResult } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IPost } from 'types/post'
import client from 'utils/axios/axios'

interface createPostArgs {
  channelId: string
  postId: string
  content: string
}

const useCreateComment = (): UseMutationResult<
  IPost,
  AxiosError,
  createPostArgs
> => {
  return useMutation(createComment)
}

export default useCreateComment

const createComment = async ({
  channelId,
  postId,
  content,
}: createPostArgs): Promise<IPost> =>
  await client
    .post(`/channels/${channelId}/posts/${postId}/comments`, { content })
    .then((res) => res.data)
