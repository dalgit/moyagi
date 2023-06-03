import Link from 'next/link'
import { useRecoilValue } from 'recoil'
import { LogoutButton } from 'features/Auth'
import userIdSelector from 'recoil/user/userIdSelector'
import * as S from './style'

const UserNavList = () => {
  const userId = useRecoilValue(userIdSelector)

  return (
    <S.UserNavListLayout>
      <Link href={`/users/${userId}`}>
        <li>프로필</li>
      </Link>
      <Link href="/create-channel">
        <li>채널 만들기</li>
      </Link>

      <Link href="/profile/registrations">
        <li>내 가입 관리</li>
      </Link>
      <LogoutButton />
    </S.UserNavListLayout>
  )
}

export default UserNavList
