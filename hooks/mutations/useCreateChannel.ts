import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { createChannel } from '@/utils/api'

interface useCreateChannelArgs {
  name: string
  address: string
  description: string
  isPublic: boolean
}

export const useCreateChannel = (): UseMutationResult<
  AxiosResponse,
  AxiosError,
  useCreateChannelArgs
> => {
  const queryClient = useQueryClient()

  return useMutation(createChannel, {
    onSuccess: () => {
      queryClient.invalidateQueries(['myJoinnedChannels'])
      alert('채널이 개설되었습니다!')
    },
  })
}
