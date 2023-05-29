import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IRegistration } from 'types/registration'
import client from 'utils/axios/axios'
import { registrationKeys } from 'utils/queryKeys/registration'

interface CreateRegistrationArgs {
  registrationId: string
  channelId: string
}

const useDeleteRegistration = (): UseMutationResult<
  IRegistration,
  AxiosError,
  CreateRegistrationArgs
> => {
  const queryClient = useQueryClient()

  return useMutation(deleteRegistration, {
    onSuccess: (deletedRegistration) => {
      queryClient.setQueryData<IRegistration[]>(
        registrationKeys.me(),
        (previousRegistrations) =>
          previousRegistrations?.filter(
            (registration) => registration._id !== deletedRegistration._id,
          ),
      )

      alert('취소가 완료되었습니다.')
    },
  })
}

export default useDeleteRegistration

const deleteRegistration = async ({
  registrationId,
  channelId,
}: CreateRegistrationArgs): Promise<IRegistration> =>
  await client.delete(`/channels/${channelId}/registrations/${registrationId}`)
