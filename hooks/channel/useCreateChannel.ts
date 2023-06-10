import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'
import userIdSelector from 'recoil/user/userIdSelector'
import { IChannel } from 'types/channel'
import client from 'utils/axios/axios'
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
  AxiosError,
  createChannelArgs
> => {
  const queryClient = useQueryClient()
  const { push } = useRouter()
  const userId = useRecoilValue(userIdSelector)

  return useMutation(createChannel, {
    onSuccess: (newChannel) => {
      const { address } = newChannel

      queryClient.setQueryData<IChannel>(
        channelKeys.detail(address),
        newChannel,
      )

      queryClient.setQueryData<IChannel[]>(
        channelKeys.list(userId),
        (previousChannels = []) => [newChannel, ...previousChannels],
      )

      push(`/channels/${address}`)
      alert('채널이 개설되었습니다!')
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
