import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IUser } from 'types/user'
import client from 'utils/axios/client'
import { userKeys } from 'utils/queryKeys/user'

const useUser = (id: string): UseQueryResult<IUser, AxiosError> => {
  return useQuery(userKeys.detail(id), () => getUser(id), {
    staleTime: 1000 * 60 * 30,
    enabled: !!id,
  })
}

export default useUser

const getUser = async (id: string): Promise<IUser> =>
  await client.get(`/users/${id}`).then((res) => res.data)
