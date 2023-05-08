import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IRegistration } from '@/types/registration'
import client from '@/utils/axios/axios'

interface CreateRegistrationArgs {
  registrationId: string
  channelId: string
}

export const useDeleteRegistration = (): UseMutationResult<
  IRegistration,
  AxiosError,
  CreateRegistrationArgs
> => {
  const queryClient = useQueryClient()

  return useMutation(deleteRegistration, {
    onSuccess: () => {
      queryClient.invalidateQueries(['myRegistrations'])
      alert('취소가 완료되었습니다.')
    },
  })
}

const deleteRegistration = async ({
  registrationId,
  channelId,
}: CreateRegistrationArgs): Promise<IRegistration> =>
  await client.delete(`/channels/${channelId}/registrations/${registrationId}`)
