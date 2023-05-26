import { useState, useRef } from 'react'
import { addDefaultImage } from 'constants/defaultImage'
import * as S from './style'

interface ImageSelectorHandler {
  setFile: React.Dispatch<React.SetStateAction<File | undefined>>
  label?: string
  defaultImage?: string
  className?: string
}

const ImageSelector = ({
  setFile,
  label,
  defaultImage = addDefaultImage,
  className,
}: ImageSelectorHandler) => {
  const ref = useRef<HTMLInputElement>(null)
  const [previewImg, setPreviewImg] = useState<string>(defaultImage)

  const handleInputChange = () => {
    if (!ref.current?.files) return
    const [file] = ref.current.files

    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setPreviewImg(reader.result as string)
      setFile(file)
    }
  }

  const handleClickSelector = () => {
    ref.current && ref.current.click()
  }

  return (
    <S.ImageSelectorLayout onClick={handleClickSelector} className={className}>
      <S.SelectedImage src={previewImg} alt="preview" />
      {label && <label htmlFor="fileInput">{label}</label>}
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
