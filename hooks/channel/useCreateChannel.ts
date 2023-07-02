import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'
import { CHANNEL_PATH } from 'constants/paths'
import { useToast } from 'hooks/common'
import userIdSelector from 'recoil/user/userIdSelector'
import { IChannel } from 'types/channel'
import client from 'utils/axios/client'
import { channelKeys } from 'utils/queryKeys/channel'

interface createChannelArgs {
  name: string
  address: string
  description: string
  isPublic: boolean
  imageUrl?: string
}

const useCreateChannel = (): UseMutationResult<
  IChannel,
  AxiosError<{ message: string }>,
  createChannelArgs
> => {
  const queryClient = useQueryClient()
  const { push } = useRouter()
  const { onToast } = useToast()
  const userId = useRecoilValue(userIdSelector)

  return useMutation(createChannel, {
    onSuccess: (newChannel) => {
      const { address } = newChannel

      queryClient.setQueryData<IChannel>(
        channelKeys.detail(address),
        newChannel,
      )

      queryClient.setQueryData<IChannel[]>(
        channelKeys.users(userId),
        (previousChannels = []) => [...previousChannels, newChannel],
      )

      queryClient.invalidateQueries(channelKeys.users(userId))

      onToast({ content: '채널이 개설되었습니다.', type: 'success' })
      push(`${CHANNEL_PATH}/${address}`)
    },
    onError: (error) => {
      const message = error.response?.data?.message || '알수없는 오류'
      onToast({ content: message, type: 'error' })
    },
  })
}

export default useCreateChannel

const createChannel = async ({
  name,
  address,
  description,
  isPublic,
  imageUrl,
}: createChannelArgs): Promise<IChannel> =>
  await client
    .post('/channels', {
      name,
      address,
      description,
      isPublic,
      imageUrl,
    })
    .then((res) => res.data)
