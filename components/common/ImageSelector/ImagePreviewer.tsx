import { useRecoilValueLoadable } from 'recoil'
import { picture, blank } from 'constants/icon'
import previewImageSelector from 'recoil/file/previewImageSelector'
import * as S from './style'

interface ImagePreviewerProps {
  defaultImage?: string
}

const ImagePreviewer = ({ defaultImage = picture }: ImagePreviewerProps) => {
  const { state, contents } = useRecoilValueLoadable(previewImageSelector)
  const isLoading = state === 'loading'

  const src = isLoading ? blank : contents || defaultImage

  return <S.SelectedImage src={src} alt="preview" />
}

export default ImagePreviewer
