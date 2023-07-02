import styled, { css } from 'styled-components'
import { baseHover } from 'styles/constants'
import FImage from '../FImage/FImage'

export const AvatarLayout = styled.div`
  display: flex;
  background-color: white;
  padding: 5px;
  gap: 5px;
  font-weight: bold;

  display: flex;
  align-items: center;

  ${baseHover}
`

export const AvatarImage = styled(FImage)<{ size: number | undefined }>`
  border-radius: 50%;

  ${({ size }) => css`
    min-width: ${size ? size + 'px' : '30px'};
    height: ${size ? size + 'px' : '30px'};
  `}
`

export const AvatarName = styled.span`
  padding: 5px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`
