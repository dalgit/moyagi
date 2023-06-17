import { FiMoreHorizontal } from 'react-icons/fi'
import styled from 'styled-components'
import { baseHover } from 'styles/constants'

export const MoreMenuLayout = styled.div`
  position: relative;
`

export const MenuList = styled.ul`
  background-color: white;
  position: absolute;
  right: 0px;
  top: 20px;
  min-width: 100px;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 10px;
  white-space: nowrap;

  li {
    font-size: 13px;
    text-align: center;
    margin: 5px 0;

    ${baseHover}
  }
`

export const MoreIcon = styled(FiMoreHorizontal)`
  :hover {
    cursor: pointer;
  }
`
