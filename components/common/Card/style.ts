import styled, { css } from 'styled-components'
import { CardStyle } from './Card'
import FImage from '../FImage/FImage'

export const StyledImage = styled(FImage)`
  border-radius: 12px;
  width: 100%;
  aspect-ratio: 1/1;
`

export const CardLayout = styled.div<CardStyle>`
  border-radius: 12px;

  ${({ width }) => css`
    width: ${width};
  `}

  ${StyledImage} {
    ${({ hasBoxShadow }) =>
      hasBoxShadow &&
      css`
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      `}
  }
`

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  font-weight: bold;
`
