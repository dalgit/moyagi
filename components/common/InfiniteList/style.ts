import styled, { css, keyframes } from 'styled-components'

interface ItemLayoutProps {
  isActive: boolean
  isInitial: boolean
}

const disappearAnimation = keyframes`
  0% {
    bottom:50%;
    transform: translateY(50%);
    opacity: 1;
  }

  100% {
    bottom: 100%;
    transform: translateY(-100%);
    opacity: 0;
  }
`

const appearAnimation = keyframes`
  0% {
    bottom:0;
    transform: translateY(100%);
    opacity: 0;
  }
  
  100% {
    bottom:50%;
    transform: translateY(50%);
    opacity: 1;
  }
`

export const InfiniteListLayout = styled.div`
  position: relative;
  width: 8rem;
  height: 2rem;
  overflow: hidden;
  display: flex;
  gap: 30px;
`

export const ItemLayout = styled.div<ItemLayoutProps>`
  position: absolute;
  width: inherit;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ isActive, isInitial }) =>
    isActive
      ? css`
          animation: ${appearAnimation} 0.9s ease-in forwards;
        `
      : css`
          animation: ${disappearAnimation} 0.9s ease-in forwards;
          ${isInitial &&
          css`
            visibility: hidden;
          `}
        `}
`
