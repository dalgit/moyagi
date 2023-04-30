import Image, { StaticImageData } from 'next/image'
import styled from 'styled-components'

interface FImageProps {
  src: string | StaticImageData
  alt: string
  className?: string
}

const FImage = ({ src, alt, className }: FImageProps) => {
  return (
    <FImageLayout className={className}>
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
