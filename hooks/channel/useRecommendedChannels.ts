import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IChannel } from 'types/channel'
import client from 'utils/axios/client'
import { channelKeys } from 'utils/queryKeys/channel'

const useRecommendedChannels = (
  options?: UseQueryOptions<IChannel[], AxiosError>,
): UseQueryResult<IChannel[], AxiosError> => {
  return useQuery<IChannel[], AxiosError>(
    channelKeys.recommended(),
    () => getRecommendedChannels(),
    options,
  )
}

export default useRecommendedChannels

const getRecommendedChannels = async (): Promise<IChannel[]> =>
  await client.get('/channels/recommended').then((res) => res.data)
