import { useMutation, UseMutationResult } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { useRouter } from 'next/router'
import { useSetRecoilState } from 'recoil'
import { userSelector } from '@/recoil/user'
import client from '@/utils/axios/axios'

interface useAuthenticateUserArgs {
  email: string
  password: string
}

const useAuthenticateUser = (): UseMutationResult<
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

export default useAuthenticateUser

const authenticateUser = async ({
  email,
  password,
}: {
  email: string
  password: string
}) =>
  await client
    .post('/auth/login', {
      email,
      password,
    })
    .then((res) => res.data)
