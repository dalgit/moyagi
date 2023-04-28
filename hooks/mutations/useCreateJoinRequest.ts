import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { createJoinRequest } from '@/utils/api'

interface useCreateJoinRequestArgs {
  channelId: string
  message: string
  isPublic: boolean
}
export const useCreateJoinRequest = (): UseMutationResult<
  AxiosResponse,
  AxiosError,
  useCreateJoinRequestArgs
> => {
  const queryClient = useQueryClient()

  return useMutation(createJoinRequest, {
    onSuccess: () => {
      queryClient.invalidateQueries(['myJoinRequests'])
    },
  })
}
