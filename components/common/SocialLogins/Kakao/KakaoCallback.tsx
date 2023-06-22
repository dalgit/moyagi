import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { Spinner } from 'components/common'
import { useToast } from 'hooks/common'
import userAtom from 'recoil/user/userAtom'
import client from 'utils/axios/client'

const KakaoCallback = () => {
  const setUser = useSetRecoilState(userAtom)
  const { onToast } = useToast()
  const { push } = useRouter()

  useEffect(() => {
    const loginUser = async () => {
      try {
        const code = new URL(window.location.href).searchParams.get('code')

        const res = await client.post(`/auth/kakao`, { code })

        setUser(res.data)
        onToast({ type: 'success', content: '로그인이 완료되었습니다.' })
        push('/')
      } catch (err) {
        onToast({
          type: 'error',
          content: '다시 시도해주세요.',
        })
        push('/login')
      }
    }

    loginUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <Spinner />
}

export default KakaoCallback
