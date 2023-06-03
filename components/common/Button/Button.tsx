import { ReactElement, ReactNode, ButtonHTMLAttributes } from 'react'
import * as S from './style'

export type ButtonVariant = 'primary' | 'secondary' | 'sub'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant: ButtonVariant
}

const Button = ({ children, ...rest }: ButtonProps): ReactElement => {
  return <S.StyledButton {...rest}>{children}</S.StyledButton>
}

export default Button

Button.defaultProps = {
  variant: 'primary',
}
