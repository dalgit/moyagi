import styled from 'styled-components'

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
    <LabelStyled htmlFor={id}>
      {label}
      <InputStyled
        type={type}
        id={id}
        name={name || id}
        value={value}
        onChange={onChange}
      />
    </LabelStyled>
  ) : (
    <InputStyled
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

const LabelStyled = styled.label`
  display: block;
  font-size: 15px;
  margin-left: 5px;
  font-weight: bolder;
`

const InputStyled = styled.input`
  width: 100%;
  border-radius: 4px;
  height: 40px;
  padding: 12px 15px;
  font-size: 15px;
  border: 0.8px solid #a6afb8;
`

export default Input
