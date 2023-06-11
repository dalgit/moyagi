import Link from 'next/link'
import { useRecoilValue } from 'recoil'
import { UserLink } from 'components/common'
import { useLogoutUser } from 'hooks/auth'
import userIdSelector from 'recoil/user/userIdSelector'
import * as S from './style'

const UserNavList = () => {
  const userId = useRecoilValue(userIdSelector)
  const { mutate: logoutMutate } = useLogoutUser()

  const handleLogoutClick = () => {
    logoutMutate({})
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
