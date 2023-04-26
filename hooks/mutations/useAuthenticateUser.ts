import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useSetRecoilState } from 'recoil'
import { userSelector } from '@/recoil/user'
import { authenticateUser } from '@/utils/api'

export const useAuthenticateUser = () => {
  const setUser = useSetRecoilState(userSelector)
  const { push } = useRouter()

  return useMutation(authenticateUser, {
    onSuccess: (data) => {
      setUser(data)
      push('/')
    },
  })
}
