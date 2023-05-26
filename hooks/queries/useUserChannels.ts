import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IChannel } from 'types/channel'
import client from 'utils/axios/axios'
import { channelKeys } from 'utils/queryKeys/channel'

export const useUserChannels = (
  id: string,
  options?: UseQueryOptions<IChannel[], AxiosError>,
): UseQueryResult<IChannel[], AxiosError> => {
  return useQuery<IChannel[], AxiosError>(
    channelKeys.me(),
    () => getUserChannels(id),
    options,
  )
}

export const getUserChannels = async (id: string): Promise<IChannel[]> =>
  await client.get(`/users/${id}/channels`).then((res) => res.data)
