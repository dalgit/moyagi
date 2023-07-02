import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IRegistration } from 'types/registration'
import client from 'utils/axios/client'
import { registrationKeys } from 'utils/queryKeys/registration'

const useUserRegsQuery = (
  id: string,
): UseQueryResult<IRegistration[], AxiosError> => {
  return useQuery({
    queryKey: registrationKeys.users(id),
    queryFn: () => getUserRegistrations(id),
  })
}

export default useUserRegsQuery

const getUserRegistrations = async (id: string): Promise<IRegistration[]> =>
  await client.get(`/users/${id}/registrations`).then((res) => res.data)
