import {
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IRegistration } from 'types/registration'
import client from 'utils/axios/client'
import { registrationKeys } from 'utils/queryKeys/registration'
import { cacheRegs } from './useRegsData'

const useChannelRegsQuery = <T = IRegistration[]>(
  channelId: string,
  options?: UseQueryOptions<IRegistration[], AxiosError, T>,
) => {
  const queryClient = useQueryClient()
  return useQuery<IRegistration[], AxiosError, T>({
    queryKey: registrationKeys.channels(channelId),
    queryFn: async () => {
      const regs = await getChannelRegistrations(channelId)
      cacheRegs(queryClient, regs)
      return regs
    },
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
