import { useRadioContext } from './RadioContext'
import * as S from './style'

interface RadioProps {
  id: string
  label: string
  value: string
}

const Radio = ({ id, label, value }: RadioProps) => {
  const { currentValue, name, onChange } = useRadioContext()
  const isCheck = currentValue === value

  return (
    <S.RadioLayout>
      <S.StyledLabel htmlFor={id}>{label}</S.StyledLabel>
      <S.StyledInput
        type="radio"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        checked={isCheck}
      />
    </S.RadioLayout>
  )
}

export default Radio
