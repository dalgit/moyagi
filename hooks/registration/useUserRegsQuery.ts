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

const useUserRegsQuery = (
  id: string,
  options?: UseQueryOptions<IRegistration[], AxiosError>,
) => {
  const queryClient = useQueryClient()
  return useQuery<IRegistration[], AxiosError>({
    queryKey: registrationKeys.users(id),
    queryFn: async () => {
      const regs = await getUserRegistrations(id)
      cacheRegs(queryClient, regs)
      return regs
    },
    staleTime: 1000 * 60 * 3,
    enabled: !!id,
    ...options,
  })
}

export default useUserRegsQuery

const getUserRegistrations = async (id: string): Promise<IRegistration[]> =>
  await client.get(`/users/${id}/registrations`).then((res) => res.data)
