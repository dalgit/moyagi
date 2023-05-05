import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IRegistration } from '@/types/registration'
import { getChannelRegistrations } from '@/utils/api'

export const useGetChannelRegistrations = (
  channelId: string,
  options?: UseQueryOptions<IRegistration[], AxiosError>,
): UseQueryResult<IRegistration[], AxiosError> => {
  return useQuery<IRegistration[], AxiosError>(
    ['channelRegistrations', channelId],
    () => getChannelRegistrations(channelId),
    options,
  )
}
