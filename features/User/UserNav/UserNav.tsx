import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'
import { Button } from 'components/common'
import { userDefaultImage } from 'constants/defaultImage'
import { UserNavList } from 'features/User'
import { useMenu } from 'hooks/common'
import userAtom from 'recoil/user/userAtom'
import * as S from './style'
const UserNav = () => {
  const user = useRecoilValue(userAtom)
  const { isMenuOpen, handleMenuClick, ref } = useMenu<HTMLDivElement>()
  const router = useRouter()

  const handleLoginButtonClcik = () => {
    router.push('/login')
  }

  if (!user._id) {
    return (
      <Button variant="sub" onClick={handleLoginButtonClcik}>
        로그인
      </Button>
    )
  }

  return (
    <S.UserNavLayout ref={ref}>
      <S.UserAvatar
        name={user.name}
        image={user.imageUrl || userDefaultImage}
        onClick={handleMenuClick}
      />
      {isMenuOpen && <UserNavList />}
    </S.UserNavLayout>
  )
}

export default UserNav
