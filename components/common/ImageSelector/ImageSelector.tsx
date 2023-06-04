import { useRef } from 'react'
import { useUploadImage } from 'hooks/common'
import ImagePreviewer from './ImagePreviewer'
import * as S from './style'

interface ImageSelectorHandler {
  defaultImage?: string
}

const ImageSelector = ({ defaultImage, ...rest }: ImageSelectorHandler) => {
  const { handleFileSet } = useUploadImage()
  const ref = useRef<HTMLInputElement>(null)

  const handleInputChange = () => {
    if (!ref.current?.files) return
    const [file] = ref.current.files
    handleFileSet(file)
  }

  const handleClickSelector = () => {
    ref.current && ref.current.click()
  }

  return (
    <S.ImageSelectorLayout onClick={handleClickSelector} {...rest}>
      <ImagePreviewer defaultImage={defaultImage} />
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        ref={ref}
        onChange={handleInputChange}
      />
    </S.ImageSelectorLayout>
  )
}

export default ImageSelector
