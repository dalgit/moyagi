import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { createRegistration } from '@/utils/api'

interface useCreateRegistrationArgs {
  channelId: string
  message: string
  isPublic: boolean
}
export const useCreateRegistration = (): UseMutationResult<
  AxiosResponse,
  AxiosError,
  useCreateRegistrationArgs
> => {
  const queryClient = useQueryClient()

  return useMutation(createRegistration, {
    onSuccess: () => {
      queryClient.invalidateQueries(['myRegistrations'])
    },
  })
}
