import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IPost } from 'types/post'
import client from 'utils/axios/client'
import { postKeys } from 'utils/queryKeys/post'

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
  const queryClient = useQueryClient()

  return useMutation(createComment, {
    onSuccess: (newComment, { channelId, postId }) => {
      queryClient.setQueryData<IPost[]>(
        postKeys.list(channelId),
        (previousPosts) => {
          const updatedPosts = previousPosts?.map((post) => {
            if (post._id === postId) {
              return {
                ...post,
                comments: [...post.comments, newComment],
              }
            }
            return post
          })

          return updatedPosts
        },
      )
    },
  })
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
