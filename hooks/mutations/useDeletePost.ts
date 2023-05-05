import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { deletePost } from '@/utils/api'

interface useDeletePostArgs {
  postId: string
  channelId: string
}

export const useDeletePost = (): UseMutationResult<
  AxiosResponse,
  AxiosError,
  useDeletePostArgs
> => {
  const queryClient = useQueryClient()

  return useMutation(deletePost, {
    onSuccess: () => {
      queryClient.invalidateQueries(['channelPosts'])
      alert('삭제가 완료되었습니다.')
    },
  })
}
