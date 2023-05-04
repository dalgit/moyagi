import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { deleteRegistration } from '@/utils/api'

interface useCreateJoinRequestArgs {
  registrationId: string
  channelId: string
}

export const useDeleteRegistration = (): UseMutationResult<
  AxiosResponse,
  AxiosError,
  useCreateJoinRequestArgs
> => {
  const queryClient = useQueryClient()

  return useMutation(deleteRegistration, {
    onSuccess: () => {
      queryClient.invalidateQueries(['myJoinRequests'])
      alert('취소가 완료되었습니다.')
    },
  })
}
