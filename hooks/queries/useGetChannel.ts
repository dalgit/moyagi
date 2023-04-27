import { useQuery } from '@tanstack/react-query'
import { getChannelBySlug } from '@/utils/api'

export const useGetChannel = (slug: string) => {
  return useQuery(['channel', slug], () => getChannelBySlug(slug))
}
