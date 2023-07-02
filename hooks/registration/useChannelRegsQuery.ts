import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IRegistration } from 'types/registration'
import client from 'utils/axios/client'
import { registrationKeys } from 'utils/queryKeys/registration'

const useChannelRegsQuery = (
  channelId: string,
  options?: UseQueryOptions<IRegistration[], AxiosError>,
) => {
  return useQuery<IRegistration[], AxiosError>({
    queryKey: registrationKeys.channels(channelId),
    queryFn: () => getChannelRegistrations(channelId),
    ...options,
  })
}

export default useChannelRegsQuery

const getChannelRegistrations = async (
  channelId: string,
): Promise<IRegistration[]> =>
  await client
    .get(`/channels/${channelId}/registrations`)
    .then((res) => res.data)
