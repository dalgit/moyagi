import styled from 'styled-components'
import { baseHover } from 'styles/constants'

export const MoreMenuLayout = styled.div`
  position: relative;

  svg {
    :hover {
      cursor: pointer;
    }
  }

  ul {
    background-color: white;
    position: absolute;
    right: 0px;
    top: 100%;
    min-width: 100px;
    border-radius: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 10px;
    white-space: nowrap;
  }

  li {
    font-size: 14px;
    text-align: center;
    margin: 7px 0;

    ${baseHover}
  }
`
