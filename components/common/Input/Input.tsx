import { InputHTMLAttributes } from 'react'
import * as S from './style'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  id?: string
  name?: string
}

const Input = ({ label, id, name, ...rest }: InputProps) => {
  const inputName = name || id

  return label ? (
    <S.StyledLabel htmlFor={id}>
      {label}
      <S.StyledInput {...rest} id={id} name={inputName} />
    </S.StyledLabel>
  ) : (
    <S.StyledInput {...rest} id={id} name={inputName} />
  )
}

Input.defaultProps = {
  type: 'text',
}

export default Input
