import { UseMutationResult, useMutation } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { useRouter } from 'next/router'
import client from '@/utils/axios/axios'

interface RegisterUserArgs {
  name: string
  email: string
  password: string
  passwordConfirm: string
}

export const useRegisterUser = (): UseMutationResult<
  AxiosResponse,
  AxiosError,
  RegisterUserArgs
> => {
  const { push } = useRouter()

  return useMutation(registerUser, {
    onSuccess: () => {
      alert('회원가입이 완료되었습니다!')
      push('/login')
    },
  })
}

export const registerUser = async ({
  name,
  email,
  password,
  passwordConfirm,
}: RegisterUserArgs) => {
  return await client.post('/auth/signup', {
    name,
    email,
    password,
    passwordConfirm,
  })
}
