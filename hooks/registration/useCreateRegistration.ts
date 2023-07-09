import {
  QueryClient,
  UseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useRecoilValue } from 'recoil'
import { useToast } from 'hooks/common'
import { IToast } from 'recoil/toast/toastAtom'
import userIdSelector from 'recoil/user/userIdSelector'
import { IRegistration, EStatus } from 'types/registration'
import client from 'utils/axios/client'
import { channelKeys } from 'utils/queryKeys/channel'
import { registrationKeys } from 'utils/queryKeys/registration'
import { cacheReg } from './useRegsData'

interface ReturnedRegistration extends IRegistration {
  status: EStatus.PENDING | EStatus.APPROVE
}

interface CreateRegistrationArgs {
  channelId: string
  message: string
  isPublic: boolean
}

const useCreateRegistration = (): UseMutationResult<
  ReturnedRegistration,
  AxiosError<{ message: string }>,
  CreateRegistrationArgs
> => {
  const queryClient = useQueryClient()
  const userId = useRecoilValue(userIdSelector)
  const { onToast } = useToast()

  return useMutation(createRegistration, {
    onSuccess: (newRegistration: ReturnedRegistration) => {
      if (newRegistration.status === EStatus.APPROVE) {
        updateChannelCache(queryClient, newRegistration.channel.address, userId)
      }

      addUserRegCache(queryClient, newRegistration, userId)

      cacheReg(queryClient, newRegistration)

      showToast(newRegistration.status, onToast)
    },
  })
}

export default useCreateRegistration

const showToast = (
  status: EStatus.PENDING | EStatus.APPROVE,
  onToast: (toast: IToast) => void,
) => {
  const messageMap = {
    [EStatus.APPROVE]: '가입이 완료되었습니다.',
    [EStatus.PENDING]: '가입 요청이 완료되었습니다.',
  }

  onToast({
    content: messageMap[status],
    type: 'success',
  })
}

const updateChannelCache = (
  queryClient: QueryClient,
  slug: string,
  userId: string,
) => {
  queryClient.invalidateQueries(channelKeys.detail(slug))
  queryClient.invalidateQueries(channelKeys.users(userId))
}

const addUserRegCache = (
  queryClient: QueryClient,
  newReg: IRegistration,
  userId: string,
) => {
  queryClient.setQueryData<IRegistration[]>(
    registrationKeys.users(userId),
    (previousRegistrations = []) => [newReg, ...previousRegistrations],
  )
}

const createRegistration = async ({
  channelId,
  message,
  isPublic,
}: CreateRegistrationArgs): Promise<ReturnedRegistration> =>
  await client
    .post(`/channels/${channelId}/registrations`, {
      message,
      isPublic,
    })
    .then((res) => res.data)
