import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { IChannel } from '@/types/channel'
import { getMyJoinnedChannels } from '@/utils/api'

export const useGetJoinnedChannels = (): UseQueryResult<IChannel[], Error> => {
  return useQuery(['myJoinnedChannels'], getMyJoinnedChannels)
}
