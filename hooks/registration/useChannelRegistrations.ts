import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IRegistration } from 'types/registration'
import client from 'utils/axios/client'
import { registrationKeys } from 'utils/queryKeys/registration'

const useChannelRegistrations = (
  channelId: string,
  options?: UseQueryOptions<IRegistration[], AxiosError>,
): UseQueryResult<IRegistration[], AxiosError> => {
  return useQuery<IRegistration[], AxiosError>(
    registrationKeys.list(channelId),
    () => getChannelRegistrations(channelId),
    options,
  )
}

export default useChannelRegistrations

const getChannelRegistrations = async (
  channelId: string,
): Promise<IRegistration[]> =>
  await client
    .get(`/channels/${channelId}/registrations`)
    .then((res) => res.data)
