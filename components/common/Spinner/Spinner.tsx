import { ClipLoader, BeatLoader } from 'react-spinners'
import * as S from './style'

interface SpinnerProps {
  type?: 'clip' | 'beat'
}

const Spinner = ({ type = 'clip' }: SpinnerProps) => {
  const SpinnerComponent = SpinnerComponents[type]

  return (
    <S.SpinnerLayout>
      <SpinnerComponent color="#B1B2FF" />
    </S.SpinnerLayout>
  )
}

const SpinnerComponents = {
  clip: ClipLoader,
  beat: BeatLoader,
}

export default Spinner
