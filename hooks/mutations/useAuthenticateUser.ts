import { useMutation, UseMutationResult } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { useRouter } from 'next/router'
import { useSetRecoilState } from 'recoil'
import { userSelector } from '@/recoil/user'
import { authenticateUser } from '@/utils/api'

interface useAuthenticateUserArgs {
  email: string
  password: string
}

export const useAuthenticateUser = (): UseMutationResult<
  AxiosResponse,
  AxiosError,
  useAuthenticateUserArgs
> => {
  const setUser = useSetRecoilState(userSelector)
  const { push } = useRouter()

  return useMutation(authenticateUser, {
    onSuccess: (data) => {
      setUser(data)
      push('/')
    },
  })
}
