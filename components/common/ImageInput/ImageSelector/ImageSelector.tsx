import * as S from './style'

interface ImageSelectorProps {
  defaultImage?: string
  fileKey: string
}

const ImageSelector = ({
  defaultImage,
  fileKey,
  ...rest
}: ImageSelectorProps) => {
  return (
    <S.StyledContainer fileKey={fileKey} {...rest}>
      <S.StyledPreviewer fileKey={fileKey} defaultImage={defaultImage} />
    </S.StyledContainer>
  )
}

export default ImageSelector
