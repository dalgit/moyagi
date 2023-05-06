import React, { ReactElement, ReactNode, ButtonHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

interface ButtonStyle {
  width?: string
  height?: string
  fontSize?: string
  variant?: string
}

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonStyle {
  children: ReactNode
}

const Button = ({ children, ...rest }: ButtonProps): ReactElement => {
  return <ButtonStyled {...rest}>{children}</ButtonStyled>
}

Button.defaultProps = {
  width: 'auto',
  height: 'auto',
  fontSize: '14px',
  variant: 'primary',
}

const ButtonStyled = styled.button<ButtonStyle>`
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

export default Button
