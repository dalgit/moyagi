import { useQuery } from '@tanstack/react-query'
import { getMyJoinRequests } from '@/utils/api'

export const useGetMyJoinRequests = () => {
  return useQuery(['myJoinRequests'], getMyJoinRequests)
}
