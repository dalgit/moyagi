import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IChannel } from '@/types/channel'
import { getChannelBySlug } from '@/utils/api'
import { channelKeys } from '@/utils/queryKeys/channel'

export const useChannel = (
  slug: string,
): UseQueryResult<IChannel, AxiosError> => {
  return useQuery(channelKeys.detail(slug), () => getChannelBySlug(slug))
}
