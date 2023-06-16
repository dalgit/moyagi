import styled, { css } from 'styled-components'

const HeaderStyle = css`
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 55px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: white;
  padding: 0 180px;
  z-index: 35;

  @media ${({ theme }) => theme.device.tabletMax} {
    padding: 0 10px;
  }
`

export const HeaderLayout = styled.nav`
  ${HeaderStyle}
  justify-content: space-between;
`

export const SimpleHeaderLayout = styled.nav`
  ${HeaderStyle}
  justify-content: center;
`
