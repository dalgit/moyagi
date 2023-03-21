import styled from 'styled-components'
import Image from 'next/image'
import tmp from '/public/assets/tmp.png'

const Header = () => {
  return (
    <HeaderLayout>
      <Image src={tmp} alt="logo_icon" width={30} height={30} />
      <Menus>
        <Image src={tmp} alt="tmp" width={30} height={30} />
        <Image src={tmp} alt="tmp" width={30} height={30} />
        <Image src={tmp} alt="user_button" width={30} height={30} />
      </Menus>
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