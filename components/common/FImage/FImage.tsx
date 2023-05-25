import Image, { StaticImageData } from 'next/image'
import { MouseEventHandler } from 'react'
import * as S from './style'

interface FImageProps {
  src: string | StaticImageData
  alt: string
  onClick?: MouseEventHandler<HTMLDivElement>
}

const FImage = ({ src, alt, ...rest }: FImageProps) => {
  return (
    <S.FImageLayout {...rest}>
      <Image src={src} alt={alt} fill />
    </S.FImageLayout>
  )
}

export default FImage

FImage.defaultProps = {
  alt: 'image',
}
