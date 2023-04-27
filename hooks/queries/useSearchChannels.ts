import { useQuery } from '@tanstack/react-query'
import { searchChannels } from '@/utils/api'

export const useSearchChannels = (keyword: string) => {
  return useQuery(['search-channels'], () => searchChannels(keyword), {
    enabled: false,
  })
}
