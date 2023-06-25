import { ReactElement, ReactNode, ButtonHTMLAttributes } from 'react'
import * as S from './style'

export type ButtonVariant = 'primary' | 'secondary' | 'sub'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: ButtonVariant
}

const Button = ({
  children,
  variant = 'primary',
  ...rest
}: ButtonProps): ReactElement => {
  return (
    <S.StyledButton variant={variant} {...rest}>
      {children}
    </S.StyledButton>
  )
}

export default Button
