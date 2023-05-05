import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { patchRegistrationStatus } from '@/utils/api'

interface usePatchRegistrationStatusProps {
  channelId: string
  registrationId: string
  status: string
}
export const usePatchRegistrationStatus = (): UseMutationResult<
  AxiosResponse,
  AxiosError,
  usePatchRegistrationStatusProps
> => {
  const queryClient = useQueryClient()

  return useMutation(patchRegistrationStatus, {
    onSuccess: () => {
      queryClient.invalidateQueries(['channelRegistrations'])
    },
  })
}
