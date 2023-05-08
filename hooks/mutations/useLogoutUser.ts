import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { useRouter } from 'next/router'
import { useResetRecoilState } from 'recoil'
import { userSelector } from '@/recoil/user'
import client from '@/utils/axios/axios'

export const useLogoutUser = (): UseMutationResult<
  AxiosResponse,
  AxiosError
> => {
  const resetUser = useResetRecoilState(userSelector)
  const queryClient = useQueryClient()
  const { push } = useRouter()

  return useMutation(logoutUser, {
    onSuccess: () => {
      push('/login')
      resetUser()
      queryClient.clear()
    },
  })
}

const logoutUser = async () => await client.post('/auth/logout')
