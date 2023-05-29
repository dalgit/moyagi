import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IRegistration } from 'types/registration'
import client from 'utils/axios/axios'
import { registrationKeys } from 'utils/queryKeys/registration'

const useUserRegistrations = (
  id: string,
): UseQueryResult<IRegistration[], AxiosError> => {
  return useQuery(registrationKeys.me(), () => getUserRegistrations(id))
}

export default useUserRegistrations

const getUserRegistrations = async (id: string): Promise<IRegistration[]> =>
  await client.get(`/users/${id}/registrations`).then((res) => res.data)
