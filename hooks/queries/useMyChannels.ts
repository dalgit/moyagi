import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IChannel } from '@/types/channel'
import client from '@/utils/axios/axios'
import { channelKeys } from '@/utils/queryKeys/channel'

export const useMyChannels = (
  options?: UseQueryOptions<IChannel[], AxiosError>,
): UseQueryResult<IChannel[], Error> => {
  return useQuery<IChannel[], AxiosError>(
    [channelKeys.all, 'me'],
    getMyChannels,
    options,
  )
}

export const getMyChannels = async (): Promise<IChannel[]> =>
  await client.get('/users/me/channels').then((res) => res.data)
