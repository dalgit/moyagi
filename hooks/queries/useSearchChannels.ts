import { useQuery } from '@tanstack/react-query'
import { IChannel } from '@/types/channel'
import { searchChannels } from '@/utils/api'

export const useSearchChannels = (keyword: string) => {
  return useQuery<IChannel[], Error>(
    ['search-channels'],
    () => searchChannels(keyword),
    {
      enabled: false,
    },
  )
}
