import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { patchJoinRequestStatus } from '@/utils/api'

interface usePatchJoinRequestStatusProps {
  channelId: string
  requestId: string
  status: string
}
export const usePatchJoinRequestStatus = (): UseMutationResult<
  AxiosResponse,
  AxiosError,
  usePatchJoinRequestStatusProps
> => {
  const queryClient = useQueryClient()

  return useMutation(patchJoinRequestStatus, {
    onSuccess: () => {
      queryClient.invalidateQueries(['channelJoinRequests'])
    },
  })
}
