import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
  useQueryClient,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IChannel } from 'types/channel'
import client from 'utils/axios/client'
import { channelKeys } from 'utils/queryKeys/channel'

const useRecommendedChannels = (
  options?: UseQueryOptions<IChannel[], AxiosError>,
): UseQueryResult<IChannel[], AxiosError> => {
  const queryClient = useQueryClient()
  return useQuery<IChannel[], AxiosError>({
    queryKey: channelKeys.recommended(),
    queryFn: async () => {
      const channels = await getRecommendedChannels()

      channels.forEach((channel) => {
        queryClient.setQueryData(channelKeys.detail(channel.address), channel)
      })

      return channels
    },
    staleTime: 1000 * 60 * 60,
    ...options,
  })
}

export default useRecommendedChannels

export const getRecommendedChannels = async (): Promise<IChannel[]> =>
  await client.get('/channels/recommended').then((res) => res.data)
