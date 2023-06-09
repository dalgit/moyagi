import { UseMutationResult, useMutation } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { useRouter } from 'next/router'
import { useToast } from 'hooks/common'
import client from 'utils/axios/client'

interface RegisterUserParams {
  name: string
  email: string
  password: string
  passwordConfirm: string
}

const useRegisterUser = (): UseMutationResult<
  AxiosResponse,
  AxiosError,
  RegisterUserParams
> => {
  const { push } = useRouter()
  const { onToast } = useToast()

  return useMutation(registerUser, {
    onSuccess: () => {
      onToast({ content: '회원가입이 완료되었습니다!', type: 'success' })
      push('/login')
    },
  })
}

export default useRegisterUser

const registerUser = async ({
  name,
  email,
  password,
  passwordConfirm,
}: RegisterUserParams) => {
  return await client.post('/auth/signup', {
    name,
    email,
    password,
    passwordConfirm,
  })
}
