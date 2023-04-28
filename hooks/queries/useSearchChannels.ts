import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IChannel } from '@/types/channel'
import { searchChannels } from '@/utils/api'

export const useSearchChannels = (
  keyword: string,
): UseQueryResult<IChannel[], AxiosError> => {
  return useQuery(['search-channels'], () => searchChannels(keyword), {
    enabled: false,
  })
}
