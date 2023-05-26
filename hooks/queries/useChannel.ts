import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IChannel } from 'types/channel'
import client from 'utils/axios/axios'
import { channelKeys } from 'utils/queryKeys/channel'

export const useChannel = (
  slug: string,
): UseQueryResult<IChannel, AxiosError> => {
  return useQuery(channelKeys.detail(slug), () => getChannelBySlug(slug))
}

const getChannelBySlug = async (slug: string): Promise<IChannel> =>
  await client
    .get('/channels', {
      params: { channelAddress: slug },
    })
    .then((res) => res.data)
