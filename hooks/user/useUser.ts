import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IUser } from 'types/user'
import client from 'utils/axios/client'
import { userKeys } from 'utils/queryKeys/user'

const useUser = (id: string, options?: UseQueryOptions<IUser, AxiosError>) => {
  return useQuery<IUser, AxiosError>({
    queryKey: userKeys.detail(id),
    queryFn: () => getUser(id),
    staleTime: 1000 * 60 * 30,
    retry: 0,
    ...options,
  })
}

export default useUser

const getUser = async (id: string): Promise<IUser> =>
  await client.get(`/users/${id}`).then((res) => res.data)
