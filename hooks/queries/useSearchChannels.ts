import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IChannel } from '@/types/channel'
import client from '@/utils/axios/axios'
import { channelKeys } from '@/utils/queryKeys/channel'

export const useSearchChannels = (
  keyword: string,
): UseQueryResult<IChannel[], AxiosError> => {
  return useQuery(channelKeys.search(keyword), () => searchChannels(keyword), {
    enabled: false,
  })
}

const searchChannels = async (keyword: string): Promise<IChannel[]> =>
  await client.get('/channels', { params: { keyword } }).then((res) => res.data)
