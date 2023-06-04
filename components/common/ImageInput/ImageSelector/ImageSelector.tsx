import * as S from './style'

interface ImageSelectorProps {
  defaultImage?: string
  atomKey: string
}

const ImageSelector = ({
  defaultImage,
  atomKey,
  ...rest
}: ImageSelectorProps) => {
  return (
    <S.StyledContainer atomKey={atomKey} {...rest}>
      <S.StyledPreviewer atomKey={atomKey} defaultImage={defaultImage} />
    </S.StyledContainer>
  )
}

export default ImageSelector
