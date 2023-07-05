import { useMutation, UseMutationResult } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { useRouter } from 'next/router'
import { useSetRecoilState } from 'recoil'
import userAtom from 'recoil/user/userAtom'
import client from 'utils/axios/client'

interface AuthenticateUserParams {
  email: string
  password: string
}

const useAuthenticateUser = (): UseMutationResult<
  AxiosResponse,
  AxiosError,
  AuthenticateUserParams
> => {
  const setUser = useSetRecoilState(userAtom)
  const { push } = useRouter()

  return useMutation(authenticateUser, {
    onSuccess: (user) => {
      setUser(user)
      push('/')
    },
  })
}

export default useAuthenticateUser

const authenticateUser = async ({ email, password }: AuthenticateUserParams) =>
  await client
    .post('/auth/login', {
      email,
      password,
    })
    .then((res) => res.data)
