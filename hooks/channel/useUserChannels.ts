import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IChannel } from 'types/channel'
import client from 'utils/axios/client'
import { channelKeys } from 'utils/queryKeys/channel'

const useUserChannels = (
  id: string,
  options?: UseQueryOptions<IChannel[], AxiosError>,
): UseQueryResult<IChannel[], AxiosError> => {
  return useQuery<IChannel[], AxiosError>(
    channelKeys.users(id),
    () => getUserChannels(id),
    options,
  )
}

export default useUserChannels

const getUserChannels = async (id: string): Promise<IChannel[]> =>
  await client.get(`/users/${id}/channels`).then((res) => res.data)
