import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { useRouter } from 'next/router'
import { useSetRecoilState } from 'recoil'
import { useToast } from 'hooks/common'
import userAtom from 'recoil/user/userAtom'
import { IUser } from 'types/user'
import client from 'utils/axios/client'
import { userKeys } from 'utils/queryKeys/user'

interface useAuthenticateUserArgs {
  email: string
  password: string
}

const useAuthenticateUser = (): UseMutationResult<
  AxiosResponse,
  AxiosError<{ message: string }>,
  useAuthenticateUserArgs
> => {
  const setUser = useSetRecoilState(userAtom)
  const { push } = useRouter()
  const { onToast } = useToast()
  return useMutation(authenticateUser, {
    onError: (error) => {
      if (error.response?.status === 400) {
        onToast({
          content: error.response.data.message,
          type: 'error',
        })
      }
    },

    onSuccess: (user) => {
      setUser(user)
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
