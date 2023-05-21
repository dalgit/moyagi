import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IUser } from '@/types/user'
import client from '@/utils/axios/axios'
import { userKeys } from '@/utils/queryKeys/user'

export const useUserSettings = (): UseQueryResult<IUser, AxiosError> => {
  return useQuery(userKeys.list(id), getUserSettings)
}

const getUserSettings = async (id: string): Promise<IUser> =>
  await client.get(`/users/${id}`).then((res) => res.data)
