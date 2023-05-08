import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IChannel } from '@/types/channel'
import client from '@/utils/axios/axios'

interface createChannelArgs {
  name: string
  address: string
  description: string
  isPublic: boolean
}

export const useCreateChannel = (): UseMutationResult<
  IChannel,
  AxiosError,
  createChannelArgs
> => {
  const queryClient = useQueryClient()

  return useMutation(createChannel, {
    onSuccess: () => {
      queryClient.invalidateQueries(['myJoinnedChannels'])
      alert('채널이 개설되었습니다!')
    },
  })
}

export const createChannel = async ({
  name,
  address,
  description,
  isPublic,
}: createChannelArgs): Promise<IChannel> =>
  await client.post('/channels', {
    name,
    address,
    description,
    isPublic,
  })
