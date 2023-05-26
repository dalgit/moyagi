import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IUser } from 'types/user'
import client from 'utils/axios/axios'
import { userKeys } from 'utils/queryKeys/user'

export const useMyInformation = (): UseQueryResult<IUser, AxiosError> => {
  return useQuery(userKeys.me(), getMyInformation)
}

const getMyInformation = async (): Promise<IUser> =>
  await client.get('/users/me').then((res) => res.data)
