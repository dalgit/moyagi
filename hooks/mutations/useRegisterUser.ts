import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { registerUser } from '@/utils/api'

export const useRegisterUser = () => {
  const { push } = useRouter()

  return useMutation(registerUser, {
    onSuccess: () => {
      alert('회원가입이 완료되었습니다!')
      push('/login')
    },
  })
}
