import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IRegistration } from '@/types/registration'
import client from '@/utils/axios/axios'

interface PatchRegistrationStatusProps {
  channelId: string
  registrationId: string
  status: string
}

export const usePatchRegistrationStatus = (): UseMutationResult<
  IRegistration,
  AxiosError,
  PatchRegistrationStatusProps
> => {
  const queryClient = useQueryClient()

  return useMutation(patchRegistrationStatus, {
    onSuccess: () => {
      queryClient.invalidateQueries(['channelRegistrations'])
    },
  })
}

const patchRegistrationStatus = async ({
  channelId,
  registrationId,
  status,
}: PatchRegistrationStatusProps): Promise<IRegistration> =>
  await client.patch(`/channels/${channelId}/registrations/${registrationId}`, {
    status,
  })
