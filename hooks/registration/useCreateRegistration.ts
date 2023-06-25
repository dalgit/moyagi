import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useRecoilValue } from 'recoil'
import { useToast } from 'hooks/common'
import userIdSelector from 'recoil/user/userIdSelector'
import { IRegistration, EStatus } from 'types/registration'
import client from 'utils/axios/client'
import { channelKeys } from 'utils/queryKeys/channel'
import { registrationKeys } from 'utils/queryKeys/registration'

interface createRegistrationArgs {
  channelId: string
  message: string
  isPublic: boolean
}

const useCreateRegistration = (): UseMutationResult<
  IRegistration,
  AxiosError<{ message: string }>,
  createRegistrationArgs
> => {
  const queryClient = useQueryClient()
  const userId = useRecoilValue(userIdSelector)
  const { onToast } = useToast()

  return useMutation(createRegistration, {
    onSuccess: (newRegistration: IRegistration) => {
      if (newRegistration.status === EStatus.APPROVE) {
        const slug = newRegistration.channel.address

        queryClient.invalidateQueries(channelKeys.detail(slug))

        queryClient.invalidateQueries(channelKeys.users(userId))

        onToast({ content: '가입이 완료되었습니다.', type: 'success' })
      }

      if (newRegistration.status === EStatus.PENDING) {
        onToast({ content: '가입 요청이 완료되었습니다.', type: 'success' })
      }

      queryClient.setQueryData<IRegistration[]>(
        registrationKeys.users(userId),
        (previousRegistrations = []) => [
          newRegistration,
          ...previousRegistrations,
        ],
      )
    },
    onError: (error) => {
      if (error.response?.status === 409) {
        onToast({
          content: error.response.data.message,
          type: 'error',
        })
      }
    },
  })
}

export default useCreateRegistration

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
