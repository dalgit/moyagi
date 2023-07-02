import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'
import { Button, MoreMenu } from 'components/common'
import { useLogoutUser } from 'hooks/auth'
import userAtom from 'recoil/user/userAtom'
import * as S from './style'

const UserNavigation = () => {
  const { _id: userId, name, imageUrl, provider } = useRecoilValue(userAtom)
  const { mutate: logout } = useLogoutUser()
  const { push } = useRouter()

  const navigate = (path: string) => {
    push(path)
  }

  const MenuIcon = () => (
    <S.StyledAvatar name={name} image={imageUrl} type="user" />
  )

  return (
    <>
      {!userId ? (
        <Button variant="sub" onClick={() => navigate('/login')}>
          로그인
        </Button>
      ) : (
        <MoreMenu Icon={MenuIcon}>
          <li onClick={() => navigate(`/users/${userId}`)}>프로필</li>
          <li onClick={() => navigate('/create-channel')}>채널 만들기</li>
          <li onClick={() => navigate('/profile/registrations')}>가입 관리</li>
          <li onClick={() => logout({ provider })}>로그아웃</li>
        </MoreMenu>
      )}
    </>
  )
}

export default UserNavigation
