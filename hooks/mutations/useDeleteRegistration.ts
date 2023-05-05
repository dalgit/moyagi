import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { deleteRegistration } from '@/utils/api'

interface useCreateRegistrationArgs {
  registrationId: string
  channelId: string
}

export const useDeleteRegistration = (): UseMutationResult<
  AxiosResponse,
  AxiosError,
  useCreateRegistrationArgs
> => {
  const queryClient = useQueryClient()

  return useMutation(deleteRegistration, {
    onSuccess: () => {
      queryClient.invalidateQueries(['myRegistrations'])
      alert('취소가 완료되었습니다.')
    },
  })
}
