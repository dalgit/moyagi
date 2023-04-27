import { useMutation, useQueryClient } from '@tanstack/react-query'
import { patchJoinRequestStatus } from '@/utils/api'

export const usePatchJoinRequestStatus = () => {
  const queryClient = useQueryClient()

  return useMutation(patchJoinRequestStatus, {
    onSuccess: () => {
      queryClient.invalidateQueries(['channelJoinRequests'])
    },
  })
}
