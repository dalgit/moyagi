import { useState, InputHTMLAttributes } from 'react'
import { Input, ErrorText } from 'components/common'

interface ValidInputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorText: string
  isValid: boolean
  label: string
}

const ValidInput = ({ isValid, errorText, ...rest }: ValidInputProps) => {
  const [isBlurred, setIsBlurred] = useState(false)

  return (
    <div>
      <Input required {...rest} onBlur={() => setIsBlurred(true)} />
      <ErrorText start={isBlurred} error={!isValid} text={errorText} />
    </div>
  )
}

export default ValidInput
