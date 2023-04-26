import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useResetRecoilState } from 'recoil'
import { userSelector } from '@/recoil/user'
import { logoutUser } from '@/utils/api'

export const useLogoutUser = () => {
  const resetUser = useResetRecoilState(userSelector)
  const { push } = useRouter()

  return useMutation(logoutUser, {
    onSuccess: () => {
      resetUser()
      push('/login')
    },
  })
}
