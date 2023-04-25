import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaUserCircle } from 'react-icons/fa'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import useClickOutside from '@/hooks/useClickOutside'
import useToggle from '@/hooks/useToggle'
import { userSelector } from '@/recoil/user'
import client from '@/utils/axios/axios'

const UserStatus = () => {
  const [user, setUser] = useRecoilState(userSelector)
  const [isMenuActive, toggleUserMenu] = useToggle()
  const listRef = useClickOutside<HTMLDivElement>(
    () => isMenuActive && toggleUserMenu(),
  )

  const { push } = useRouter()

  const handleLogout = async () => {
    await client.post('/auth/logout')
    setUser(null)
    push('/login')
  }

  return (
    <div>
      {user ? (
        <UserBox ref={listRef}>
          {user.name}
          <UserIcon onClick={toggleUserMenu} size={30} />
          {isMenuActive && (
            <MenuList>
              <Link href="/user/profile">
                <li>내 정보</li>
              </Link>
              <li onClick={handleLogout}>로그아웃</li>
            </MenuList>
          )}
        </UserBox>
      ) : (
        <button onClick={handleLogout}>로그아웃</button>
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

const UserIcon = styled(FaUserCircle)`
  :hover {
    cursor: pointer;
  }
`
