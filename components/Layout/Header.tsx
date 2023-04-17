import Image from 'next/image'
import tmp from '/public/assets/tmp.png'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import client from '@/utils/axios/axios'

const Header = () => {
  const [userName, setUserName] = useState<string>('')
  const router = useRouter()

  const handleProfile = async () => {
    try {
      const userInfo = await client.get('/users/me').then((res) => res.data)
      sessionStorage.setItem('userNameItem', userInfo.name)
      setUserName(userInfo.name)
    } catch {
      sessionStorage.setItem('userNameItem', '비회원')
      setUserName('비회원')
    }
  }

  useEffect(() => {
    const userNameItem = sessionStorage.getItem('userNameItem')

    if (userNameItem) setUserName(userNameItem)
    else handleProfile()
  }, [])

  const handleLogout = async () => {
    await client.post('/auth/logout')
    sessionStorage.clear()
    router.push('/login')
  }

  return (
    <HeaderLayout>
      {userName}
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
