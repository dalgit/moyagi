import { useQuery } from '@tanstack/react-query'
import { IChannel } from '@/types/channel'
import { getMyJoinnedChannels } from '@/utils/api'

export const useGetJoinnedChannels = () => {
  return useQuery<IChannel[], Error>(
    ['myJoinnedChannels'],
    getMyJoinnedChannels,
  )
}
