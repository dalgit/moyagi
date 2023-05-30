import Link from 'next/link'
import { useRecoilValue } from 'recoil'
import { LogoutButton } from 'features/Auth'
import { userIdSelector } from 'recoil/user'
import * as S from './style'

const UserNavList = () => {
  const userId = useRecoilValue(userIdSelector) || ''

  return (
    <S.UserNavListLayout>
      <Link href={`/users/${userId}`}>
        <li>내 프로필</li>
      </Link>
      <Link href="/profile/channels">
        <li>채널 관리</li>
      </Link>
      <Link href="/create-channel">
        <li>채널 만들기</li>
      </Link>

      <Link href="/profile/registrations">
        <li>가입 관리</li>
      </Link>
      <Link href="/profile/posts">
        <li>게시물 관리</li>
      </Link>
      <LogoutButton />
    </S.UserNavListLayout>
  )
}

export default UserNavList
