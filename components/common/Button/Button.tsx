import { ReactElement, ReactNode, ButtonHTMLAttributes } from 'react'
import * as S from './style'

export interface ButtonStyle {
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
  return <S.StyledButton {...rest}>{children}</S.StyledButton>
}

export default Button

Button.defaultProps = {
  width: 'auto',
  height: 'auto',
  fontSize: '14px',
  variant: 'primary',
}
