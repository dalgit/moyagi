import Image, { StaticImageData } from 'next/image'
import { MouseEventHandler } from 'react'
import styled from 'styled-components'

interface FImageProps {
  src: string | StaticImageData
  alt: string
  onClick?: MouseEventHandler<HTMLDivElement>
}

const FImage = ({ src, alt, ...rest }: FImageProps) => {
  return (
    <FImageLayout {...rest}>
      <Image src={src} alt={alt} fill />
    </FImageLayout>
  )
}

export default FImage

FImage.defaultProps = {
  alt: 'image',
}

const FImageLayout = styled.div`
  position: relative;
  img {
    border-radius: inherit;
  }
`
