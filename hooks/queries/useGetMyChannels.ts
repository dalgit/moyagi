import { useQuery } from '@tanstack/react-query'
import { getMyChannels } from '@/utils/api'

const useGetMyChannels = () => {
  return useQuery(['my-channels'], getMyChannels)
}

export default useGetMyChannels
