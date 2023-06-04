import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IChannel } from 'types/channel'
import client from 'utils/axios/axios'
import { channelKeys } from 'utils/queryKeys/channel'

const useMyChannels = (
  options?: UseQueryOptions<IChannel[], AxiosError>,
): UseQueryResult<IChannel[], Error> => {
  return useQuery<IChannel[], AxiosError>(
    channelKeys.me(),
    getMyChannels,
    options,
  )
}

export default useMyChannels

const getMyChannels = async (): Promise<IChannel[]> =>
  await client.get('/users/me/channels').then((res) => res.data)