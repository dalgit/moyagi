import { useRecoilValueLoadable } from 'recoil'
import { picture, blank } from 'constants/icon'
import previewImageSelector from 'recoil/file/previewImageSelector'
import * as S from './style'

interface ImagePreviewerProps {
  defaultImage?: string
  atomKey: string
}

const ImagePreviewer = ({
  atomKey,
  defaultImage,
  ...rest
}: ImagePreviewerProps) => {
  const { state, contents } = useRecoilValueLoadable(
    previewImageSelector(atomKey),
  )

  const isLoading = state === 'loading'
  const src = isLoading ? blank : contents || defaultImage

  return <S.ImagePreviewerLayout alt="preview" src={src} {...rest} />
}

ImagePreviewer.defaultProps = {
  defaultImage: picture,
}

export default ImagePreviewer
