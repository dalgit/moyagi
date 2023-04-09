import styled from 'styled-components'
import Image from 'next/image'
import tmp from '/public/assets/tmp.png'
import { useRouter } from 'next/router'
import client from '@/utils/axios/axios'

const Header = () => {
  const router = useRouter()
  const handleLogout = async () => {
    await client.post('/auth/logout')
    router.push('/login')
  }
  return (
    <HeaderLayout>
      <Image src={tmp} alt="logo_icon" width={30} height={30} />
      <Menus>
        <Image src={tmp} alt="tmp" width={30} height={30} />
        <Image src={tmp} alt="tmp" width={30} height={30} />
        <Image src={tmp} alt="user_button" width={30} height={30} />
      </Menus>
      <button onClick={handleLogout}>로그아웃</button>
    </HeaderLayout>
  )
}

export default Header

const HeaderLayout = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 55px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: white;
  padding: 0 180px;
`
const Menus = styled.div``
