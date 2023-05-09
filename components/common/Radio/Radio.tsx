import styled from 'styled-components'
import { useRadioContext } from './RadioContext'

interface RadioProps {
  id: string
  label: string
  value: string
}

const Radio = ({ id, label, value }: RadioProps) => {
  const { currentValue, name, onChange } = useRadioContext()
  const isCheck = currentValue === value

  return (
    <RadioLayout>
      <LabelStyled htmlFor={id}>{label}</LabelStyled>
      <InputStyled
        type="radio"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        checked={isCheck}
      />
    </RadioLayout>
  )
}

export default Radio

const RadioLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

const LabelStyled = styled.label`
  font-size: 15px;
  margin-left: 5px;
  white-space: nowrap;
  text-align: center;
`

const InputStyled = styled.input`
  width: 100%;
  border-radius: 4px;
  height: 40px;
  padding: 12px 15px;
  font-size: 15px;
  border: 0.8px solid #a6afb8;
`
