import { Button } from '@mui/material'
import Link from 'next/link'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'
import { FImage } from 'components/common'
import { userDefaultImage } from 'constants/defaultImage'
import { LogoutButton } from 'features/Auth'
import useClickOutside from 'hooks/useClickOutside'
import useToggle from 'hooks/useToggle'
import { userSelector } from 'recoil/user'

const UserStatus = () => {
  const user = useRecoilValue(userSelector)
  const [isMenuActive, toggleUserMenu] = useToggle()
  const listRef = useClickOutside<HTMLDivElement>(
    () => isMenuActive && toggleUserMenu(),
  )

  return (
    <div>
      {user ? (
        <UserBox ref={listRef}>
          {user.name}
          <UserIcon
            onClick={toggleUserMenu}
            src={user.imageUrl || userDefaultImage}
          />
          {isMenuActive && (
            <MenuList>
              <Link href="/profile/setting">
                <li>내 프로필</li>
              </Link>
              <Link href="/profile/channels">
                <li>채널 관리</li>
              </Link>
              <Link href="/profile/registrations">
                <li>가입 관리</li>
              </Link>
              <Link href="/profile/posts">
                <li>게시물 관리</li>
              </Link>
              <LogoutButton />
            </MenuList>
          )}
        </UserBox>
      ) : (
        <Button>로그인</Button>
      )}
    </div>
  )
}

export default UserStatus

const MenuList = styled.ul`
  background-color: white;
  position: absolute;
  right: 0px;
  top: 35px;
  width: 130px;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 10px;

  li {
    text-align: center;

    :hover {
      cursor: pointer;
      color: red;
    }
  }
`

const UserBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
`

const UserIcon = styled(FImage)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`
