import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IRegistration } from '@/types/registration'
import { getChannelRegistrations } from '@/utils/api'
import { registrationKeys } from '@/utils/queryKeys/registration'

export const useChannelRegistrations = (
  channelId: string,
  options?: UseQueryOptions<IRegistration[], AxiosError>,
): UseQueryResult<IRegistration[], AxiosError> => {
  return useQuery<IRegistration[], AxiosError>(
    registrationKeys.list(channelId),
    () => getChannelRegistrations(channelId),
    options,
  )
}
