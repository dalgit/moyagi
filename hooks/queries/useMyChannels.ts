import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IChannel } from '@/types/channel'
import { getMyJoinnedChannels } from '@/utils/api'

export const useMyChannels = (
  options?: UseQueryOptions<IChannel[], AxiosError>,
): UseQueryResult<IChannel[], Error> => {
  return useQuery<IChannel[], AxiosError>(
    ['myJoinnedChannels'],
    getMyJoinnedChannels,
    options,
  )
}
