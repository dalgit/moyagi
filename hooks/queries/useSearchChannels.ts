import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IChannel } from '@/types/channel'
import { searchChannels } from '@/utils/api'
import { channelKeys } from '@/utils/queryKeys/channel'

export const useSearchChannels = (
  keyword: string,
): UseQueryResult<IChannel[], AxiosError> => {
  return useQuery(channelKeys.search(keyword), () => searchChannels(keyword), {
    enabled: false,
  })
}
