import { useQuery } from '@tanstack/react-query'
import { IJoinRequest } from '@/types/joinRequest'
import { getMyJoinRequests } from '@/utils/api'

export const useGetMyJoinRequests = () => {
  return useQuery<IJoinRequest[], Error>(['myJoinRequests'], getMyJoinRequests)
}
