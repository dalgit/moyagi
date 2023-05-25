import * as S from './style'

interface InputProps {
  label?: string
  id?: string
  name?: string
  type?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ label, id, name, type, value, onChange }: InputProps) => {
  return label ? (
    <S.StyledLabel htmlFor={id}>
      {label}
      <S.StyledInput
        type={type}
        id={id}
        name={name || id}
        value={value}
        onChange={onChange}
      />
    </S.StyledLabel>
  ) : (
    <S.StyledInput
      type={type}
      id={id}
      name={name || id}
      value={value}
      onChange={onChange}
    />
  )
}

Input.defaultProps = {
  type: 'text',
}

export default Input
