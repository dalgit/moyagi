import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { useRouter } from 'next/router'
import { useResetRecoilState } from 'recoil'
import userAtom from 'recoil/user/userAtom'
import client from 'utils/axios/axios'

const useLogoutUser = (): UseMutationResult<AxiosResponse, AxiosError> => {
  const resetUser = useResetRecoilState(userAtom)
  const queryClient = useQueryClient()
  const { push } = useRouter()

  return useMutation(logoutUser, {
    onMutate: () => {
      push('/login')
      resetUser()
      queryClient.clear()
    },
  })
}

export default useLogoutUser

const logoutUser = async () => await client.post('/auth/logout')
