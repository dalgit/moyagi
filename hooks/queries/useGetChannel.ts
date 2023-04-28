import { useQuery } from '@tanstack/react-query'
import { IChannel } from '@/types/channel'
import { getChannelBySlug } from '@/utils/api'

export const useGetChannel = (slug: string) => {
  return useQuery<IChannel, Error>(['channel', slug], () =>
    getChannelBySlug(slug),
  )
}
