import Image, { StaticImageData } from 'next/image'
import { blank } from 'constants/icon'
import * as S from './style'

interface FImageProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string | StaticImageData
  alt?: string
}

const FImage = ({ src = blank, alt = 'image', ...rest }: FImageProps) => {
  return (
    <S.FImageLayout {...rest}>
      <Image src={src} alt={alt} fill />
    </S.FImageLayout>
  )
}

export default FImage
