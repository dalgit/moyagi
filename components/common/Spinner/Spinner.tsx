import { ClipLoader } from 'react-spinners'
import * as S from './style'

const Spinner = () => {
  return (
    <S.SpinnerLayout>
      <ClipLoader color="#B1B2FF" />
    </S.SpinnerLayout>
  )
}

export default Spinner
