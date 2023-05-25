import styled, { css } from 'styled-components'
import { ButtonStyle } from './Button'

export const StyledButton = styled.button<ButtonStyle>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 10px;

  ${({ width, height, fontSize }) => css`
    width: ${width};
    height: ${height};
    font-size: ${fontSize};
  `}

  ${({ theme, variant }) =>
    variant &&
    css`
      ${theme.button[variant]};
    `}
`
