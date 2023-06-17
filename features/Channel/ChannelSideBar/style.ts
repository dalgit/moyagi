import { AiOutlinePlus } from 'react-icons/ai'
import styled, { css } from 'styled-components'

const IconStyle = css`
  width: 50px;
  height: 50px;
  border: 0.5px solid #e1e3e7;
  color: gray;
  border-radius: 50%;
  padding: 2px;
  background-color: white;

  :hover {
    cursor: pointer;
  }
`

export const ChannelSideBarLayout = styled.div`
  z-index: 15;

  svg {
    ${IconStyle}
  }

  @media ${({ theme }) => theme.device.mobile} {
    position: fixed;
    bottom: 10px;
    right: 10px;
  }
`

export const IconWrapper = styled.div<{ isMobileMenuOpen: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media ${({ theme }) => theme.device.mobile} {
    position: absolute;
    z-index: -1;
    visibility: ${({ isMobileMenuOpen }) =>
      isMobileMenuOpen ? 'visible' : 'hidden'};
    opacity: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? '1' : '0')};
    bottom: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? '60px' : '0')};
    transition: bottom 1s ease-in-out, visibility 1s ease-in-out,
      opacity 0.5s ease-in-out;
  }
`

export const PlusIcon = styled(AiOutlinePlus)`
  display: none;

  @media ${({ theme }) => theme.device.mobile} {
    display: block;
  }
`
