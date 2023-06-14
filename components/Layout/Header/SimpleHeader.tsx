import Image from 'next/image'
import { logo } from 'constants/icon'
import * as S from './style'

const SimpleHeader = () => {
  return (
    <S.SimpleHeaderLayout>
      <Image src={logo} alt="logo" width={120} height={30} />
    </S.SimpleHeaderLayout>
  )
}

export default SimpleHeader
