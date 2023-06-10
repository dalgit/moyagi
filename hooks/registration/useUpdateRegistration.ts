import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IRegistration } from 'types/registration'
import client from 'utils/axios/axios'
import { registrationKeys } from 'utils/queryKeys/registration'

interface UpdateRegistrationProps {
  channelId: string
  registrationId: string
  status: string
}

const useUpdateRegistration = (): UseMutationResult<
  IRegistration,
  AxiosError,
  UpdateRegistrationProps
> => {
  const queryClient = useQueryClient()

  return useMutation(updateRegistration, {
    onSuccess: (updatedRegistration, { channelId }) => {
      queryClient.setQueryData<IRegistration[]>(
        registrationKeys.list(channelId),
        (previousRegistrations = []) =>
          previousRegistrations.map((registration) =>
            registration._id === updatedRegistration._id
              ? updatedRegistration
              : registration,
          ),
      )
    },
  })
}

export default useUpdateRegistration

const updateRegistration = async ({
  channelId,
  registrationId,
  status,
}: UpdateRegistrationProps): Promise<IRegistration> =>
  await client.patch(`/channels/${channelId}/registrations/${registrationId}`, {
    status,
  })
