import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IRegistration } from '@/types/registration'
import client from '@/utils/axios/axios'
import { registrationKeys } from '@/utils/queryKeys/registration'

export const useMyRegistrations = (): UseQueryResult<
  IRegistration[],
  AxiosError
> => {
  return useQuery(registrationKeys.list('me'), getMyRegistrations)
}

export const getMyRegistrations = async (): Promise<IRegistration[]> =>
  await client.get('/users/me/registrations').then((res) => res.data)
