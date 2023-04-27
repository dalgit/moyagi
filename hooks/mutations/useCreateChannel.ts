import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createChannel } from '@/utils/api'

export const useCreateChannel = () => {
  const queryClient = useQueryClient()

  return useMutation(createChannel, {
    onSuccess: () => {
      queryClient.invalidateQueries(['myJoinnedChannels'])
      alert('채널이 개설되었습니다!')
    },
  })
}
