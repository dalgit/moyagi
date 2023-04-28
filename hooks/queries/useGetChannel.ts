import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IChannel } from '@/types/channel'
import { getChannelBySlug } from '@/utils/api'

export const useGetChannel = (
  slug: string,
): UseQueryResult<IChannel, AxiosError> => {
  return useQuery(['channel', slug], () => getChannelBySlug(slug))
}
