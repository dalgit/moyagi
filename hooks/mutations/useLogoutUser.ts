import { UseMutationResult, useMutation } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { useRouter } from 'next/router'
import { useResetRecoilState } from 'recoil'
import { userSelector } from '@/recoil/user'
import { logoutUser } from '@/utils/api'

export const useLogoutUser = (): UseMutationResult<
  AxiosResponse,
  AxiosError
> => {
  const resetUser = useResetRecoilState(userSelector)
  const { push } = useRouter()

  return useMutation(logoutUser, {
    onSuccess: () => {
      resetUser()
      push('/login')
    },
  })
}
