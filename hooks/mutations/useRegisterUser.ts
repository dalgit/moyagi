import { UseMutationResult, useMutation } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { useRouter } from 'next/router'
import { registerUser } from '@/utils/api'

interface useRegisterUserArgs {
  name: string
  email: string
  password: string
  passwordConfirm: string
}
export const useRegisterUser = (): UseMutationResult<
  AxiosResponse,
  AxiosError,
  useRegisterUserArgs
> => {
  const { push } = useRouter()

  return useMutation(registerUser, {
    onSuccess: () => {
      alert('회원가입이 완료되었습니다!')
      push('/login')
    },
  })
}
