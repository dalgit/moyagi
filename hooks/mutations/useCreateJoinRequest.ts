import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createJoinRequest } from '@/utils/api'

export const useCreateJoinRequest = () => {
  const queryClient = useQueryClient()

  return useMutation(createJoinRequest, {
    onSuccess: () => {
      queryClient.invalidateQueries(['myJoinRequests'])
    },
  })
}
