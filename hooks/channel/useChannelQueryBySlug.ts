import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IChannel } from 'types/channel'
import client from 'utils/axios/client'
import { channelKeys } from 'utils/queryKeys/channel'

export const useChannelQueryBySlug = <T = IChannel>(
  slug: string,
  options?: UseQueryOptions<IChannel, AxiosError, T>,
) => {
  return useQuery<IChannel, AxiosError, T>({
    queryKey: channelKeys.detail(slug),
    queryFn: () => getChannelBySlug(slug),
    ...options,
    staleTime: 1000 * 60 * 10,
  })
}

export const getChannelBySlug = async (slug: string): Promise<IChannel> =>
  await client
    .get('/channels', {
      params: { channelAddress: slug },
    })
    .then((res) => res.data)
