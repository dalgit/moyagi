import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IChannel } from '@/types/channel'
import client from '@/utils/axios/axios'
import { channelKeys } from '@/utils/queryKeys/channel'

export const useChannelsByKeword = (
  keyword: string,
  options?: UseQueryOptions<IChannel[], AxiosError>,
): UseQueryResult<IChannel[], AxiosError> => {
  return useQuery<IChannel[], AxiosError>(
    channelKeys.search(keyword),
    () => searchChannelsByKeword(keyword),
    options,
  )
}

const searchChannelsByKeword = async (keyword: string): Promise<IChannel[]> =>
  await client.get('/channels', { params: { keyword } }).then((res) => res.data)
