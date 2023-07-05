import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { useRouter } from 'next/router'
import { useResetRecoilState } from 'recoil'
import userAtom from 'recoil/user/userAtom'
import { IUser } from 'types/user'
import client from 'utils/axios/client'

type LogoutUserParams = Partial<Pick<IUser, 'provider'>>

const useLogoutUser = (): UseMutationResult<
  AxiosResponse | string,
  AxiosError,
  LogoutUserParams
> => {
  const { cleanUpAndRedirect } = useCleanUp()

  return useMutation(handleLogout, {
    onMutate: async ({ provider = 'local' }) => {
      if (provider === 'local') {
        cleanUpAndRedirect()
      }
    },
  })
}

export default useLogoutUser

const useCleanUp = () => {
  const resetUser = useResetRecoilState(userAtom)
  const queryClient = useQueryClient()
  const { push } = useRouter()

  const cleanUpAndRedirect = async () => {
    await push('/login')
    resetUser()
    queryClient.clear()
  }

  return { cleanUpAndRedirect }
}

const handleLogout = async ({ provider = 'local' }: LogoutUserParams) => {
  if (provider === 'kakao') {
    return logoutFromKakao()
  }

  return logoutFromLocal()
}

const logoutFromLocal = async () => await client.post('/auth/logout')
const logoutFromKakao = () =>
  (window.location.href = `https://kauth.kakao.com/oauth/logout?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API}&logout_redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_LOGOUT_REDIRECT_URI}`)
