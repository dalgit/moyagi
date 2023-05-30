import { useRecoilValue } from 'recoil'
import { Button } from 'components/common'
import { userDefaultImage } from 'constants/defaultImage'
import { UserNavList } from 'features/User'
import { useToggle } from 'hooks/common'
import useClickOutside from 'hooks/common/useClickOutside'
import { userSelector } from 'recoil/user'
import * as S from './style'

const UserNav = () => {
  const user = useRecoilValue(userSelector)
  const [isMenuActive, toggleUserMenu] = useToggle()
  const listRef = useClickOutside<HTMLDivElement>(
    () => isMenuActive && toggleUserMenu(),
  )

  if (!user) {
    return <Button>로그인</Button>
  }

  return (
    <S.UserNavLayout ref={listRef}>
      <S.UserAvatar
        name={user.name}
        image={user.imageUrl || userDefaultImage}
        onClick={toggleUserMenu}
      />
      {isMenuActive && <UserNavList />}
    </S.UserNavLayout>
  )
}

export default UserNav
