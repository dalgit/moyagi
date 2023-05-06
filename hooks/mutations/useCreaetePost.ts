import {
  useMutation,
  useQueryClient,
  UseMutationResult,
} from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { createPost } from '@/utils/api'
import { postKeys } from '@/utils/queryKeys/post'

interface useCreatePostArgs {
  channelId: string
  content: string
}

export const useCreatePost = (
  channelId: string,
): UseMutationResult<AxiosResponse, AxiosError, useCreatePostArgs> => {
  const queryClient = useQueryClient()

  return useMutation(createPost, {
    onSuccess: () => {
      queryClient.invalidateQueries(['channelPosts', channelId])
      alert('작성이 완료되었습니다.')
    },
  })
}
