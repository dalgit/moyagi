import { useQuery } from '@tanstack/react-query'
import { getMyJoinnedChannels } from '@/utils/api'

export const useGetJoinnedChannels = () => {
  return useQuery(['myJoinnedChannels'], getMyJoinnedChannels)
}
