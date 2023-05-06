import { ReactNode } from 'react'
import { FiMoreHorizontal as MoreIcon } from 'react-icons/fi'
import styled from 'styled-components'
import useMenu from '@/hooks/useMenuToggle'
import { baseHover } from '@/styles/constants'

interface MoreMenuProps {
  children: ReactNode
}

const MoreMenu = ({ children }: MoreMenuProps) => {
  const { isMenuOpen, handleMenuClick, ref } = useMenu<HTMLDivElement>()

  return (
    <Wrapper ref={ref}>
      <MoreIcon onClick={handleMenuClick} />
      {isMenuOpen && <MenuList>{children}</MenuList>}
    </Wrapper>
  )
}

export default MoreMenu

const Wrapper = styled.div`
  position: relative;
`

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
    ${baseHover}
  }
`
