import Link from 'next/link'
import { useRecoilValue } from 'recoil'
import { UserLink } from 'components/common'
import { useLogoutUser } from 'hooks/auth'
import userAtom from 'recoil/user/userAtom'
import * as S from './style'

const UserNavList = () => {
  const { provider, _id: userId } = useRecoilValue(userAtom)
  const { mutate: logoutMutate } = useLogoutUser()

  const handleLogoutClick = () => {
    if (provider === 'kakao') {
      window.location.href = `https://kauth.kakao.com/oauth/logout?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API}&logout_redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_LOGOUT_REDIRECT_URI}`
    }

    if (provider === 'local') {
      logoutMutate({})
    }
  }

  return (
    <S.UserNavListLayout>
      <UserLink href={userId}>
        <li>프로필</li>
      </UserLink>
      <Link href="/create-channel">
        <li>채널 만들기</li>
      </Link>
      <Link href="/profile/registrations">
        <li>내 가입 관리</li>
      </Link>
      <li onClick={handleLogoutClick}>로그아웃</li>
    </S.UserNavListLayout>
  )
}

export default UserNavList
