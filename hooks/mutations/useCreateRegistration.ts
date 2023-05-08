import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IRegistration } from '@/types/registration'
import client from '@/utils/axios/axios'
import { registrationKeys } from '@/utils/queryKeys/registration'

interface createRegistrationArgs {
  channelId: string
  message: string
  isPublic: boolean
}

export const useCreateRegistration = (): UseMutationResult<
  IRegistration,
  AxiosError,
  createRegistrationArgs
> => {
  const queryClient = useQueryClient()

  return useMutation(createRegistration, {
    onSuccess: (newRegistration) => {
      queryClient.setQueryData<IRegistration[]>(
        registrationKeys.me(),
        (previousRegistrations = []) => [
          newRegistration,
          ...previousRegistrations,
        ],
      )
    },
  })
}

const createRegistration = async ({
  channelId,
  message,
  isPublic,
}: createRegistrationArgs): Promise<IRegistration> =>
  await client.post(`/channels/${channelId}/registrations`, {
    message,
    isPublic,
  })
