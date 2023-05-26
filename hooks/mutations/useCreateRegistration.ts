import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IRegistration, EStatus } from 'types/registration'
import client from 'utils/axios/axios'
import { channelKeys } from 'utils/queryKeys/channel'
import { registrationKeys } from 'utils/queryKeys/registration'

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
    onSuccess: (newRegistration: IRegistration) => {
      if (newRegistration.status === EStatus.APPROVE) {
        const slug = newRegistration.channel.address

        queryClient.invalidateQueries(channelKeys.detail(slug))
        alert('가입이 완료되었습니다.')
      }

      if (newRegistration.status === EStatus.PENDING) {
        alert('가입 요청이 완료되었습니다.')
      }

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
  await client
    .post(`/channels/${channelId}/registrations`, {
      message,
      isPublic,
    })
    .then((res) => res.data)
