import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { logo } from '@/constants/defaultImage'

const UserStatus = dynamic(() => import('./UserStatus'), {
  ssr: false,
})

const Header = () => {
  return (
    <HeaderLayout>
      <Link href="/">
        <Image src={logo} alt="logo" width={120} height={30} />
      </Link>
      <UserStatus />
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
  z-index: 10;
`
