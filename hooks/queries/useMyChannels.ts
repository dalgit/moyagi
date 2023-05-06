import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IChannel } from '@/types/channel'
import { getMyJoinnedChannels } from '@/utils/api'
import { channelKeys } from '@/utils/queryKeys/channel'

export const useMyChannels = (
  options?: UseQueryOptions<IChannel[], AxiosError>,
): UseQueryResult<IChannel[], Error> => {
  return useQuery<IChannel[], AxiosError>(
    [channelKeys.all, 'me'],
    getMyJoinnedChannels,
    options,
  )
}
