import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IUser } from '@/types/user'
import client from '@/utils/axios/axios'
import { userKeys } from '@/utils/queryKeys/user'

export const useUser = (id: string): UseQueryResult<IUser, AxiosError> => {
  return useQuery(userKeys.list(id), () => getUser(id))
}

const getUser = async (id: string): Promise<IUser> =>
  await client.get(`/users/${id}`).then((res) => res.data)
