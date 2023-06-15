import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useToast } from 'hooks/common'
import { IRegistration } from 'types/registration'
import client from 'utils/axios/client'
import { registrationKeys } from 'utils/queryKeys/registration'

interface DeleteRegistrationArgs {
  userId: string
  registrationId: string
}

const useDeleteRegistration = (): UseMutationResult<
  IRegistration,
  AxiosError,
  DeleteRegistrationArgs
> => {
  const queryClient = useQueryClient()
  const { onToast } = useToast()

  return useMutation(deleteRegistration, {
    onMutate: ({ registrationId, userId }) => {
      const previousRegistrations = queryClient.getQueryData<IRegistration[]>(
        registrationKeys.users(userId),
      )

      const updatedRegistrations = previousRegistrations?.filter(
        (registration) => registration._id !== registrationId,
      )

      queryClient.setQueryData<IRegistration[]>(
        registrationKeys.users(userId),
        updatedRegistrations,
      )

      onToast({ content: '취소가 완료되었습니다.', type: 'success' })
      return { previousRegistrations }
    },

    onError: (_, { userId }, context) => {
      if (context?.previousRegistrations) {
        queryClient.setQueryData<IRegistration[]>(
          registrationKeys.users(userId),
          context.previousRegistrations,
        )
      }
    },
  })
}

export default useDeleteRegistration

const deleteRegistration = async ({
  userId,
  registrationId,
}: DeleteRegistrationArgs): Promise<IRegistration> =>
  await client.delete(`/users/${userId}/registrations/${registrationId}`)
