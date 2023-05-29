import * as S from './style'

interface ErrorTextProps {
  start: boolean
  error: boolean
  text: string
}

const ErrorText = ({ start, error, text }: ErrorTextProps) => {
  const isError = start && error

  return <S.Text isActive={isError}>{text}</S.Text>
}

export default ErrorText
