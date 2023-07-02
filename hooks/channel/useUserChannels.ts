import {
  useQuery,
  useQueryClient,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IChannel } from 'types/channel'
import client from 'utils/axios/client'
import { channelKeys } from 'utils/queryKeys/channel'

const useUserChannels = (
  id: string,
  options?: UseQueryOptions<IChannel[], AxiosError>,
): UseQueryResult<IChannel[], AxiosError> => {
  const queryClient = useQueryClient()

  return useQuery<IChannel[], AxiosError>({
    queryKey: channelKeys.users(id),
    queryFn: async () => {
      const channels = await getUserChannels(id)

      channels?.forEach((channel) => {
        queryClient.setQueryData(channelKeys.detail(channel.address), channel)
      })

      return channels
    },
    staleTime: 1000 * 60 * 10,
    enabled: !!id,
    ...options,
  })
}

export default useUserChannels

const getUserChannels = async (id: string): Promise<IChannel[]> =>
  await client.get(`/users/${id}/channels`).then((res) => res.data)
