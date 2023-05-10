import { useState, useRef } from 'react'
import styled from 'styled-components'
import FImage from '@/components/common/FImage'
import { addDefaultImage } from '@/constants/defaultImage'

interface ImageSelectorHandler {
  setFile: React.Dispatch<React.SetStateAction<File | undefined>>
}

const ImageSelector = ({ setFile }: ImageSelectorHandler) => {
  const ref = useRef<HTMLInputElement>(null)
  const [previewImg, setPreviewImg] = useState<string>(addDefaultImage)

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
    <ImageSelectorLayout onClick={handleClickSelector}>
      <SelectedImage src={previewImg} alt="preview" />
      <label htmlFor="fileInput">파일 선택</label>
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        ref={ref}
        onChange={handleInputChange}
      />
    </ImageSelectorLayout>
  )
}

export default ImageSelector

const ImageSelectorLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  gap: 10px;

  label {
    text-align: center;
    border-radius: 5px;
    padding: 10px;
    background-color: #7bcfb5;
    color: #fff;
    cursor: pointer;
  }

  input {
    display: none;
  }
`

const SelectedImage = styled(FImage)`
  width: inherit;
  aspect-ratio: 1/1;
  background-color: white;
  border-radius: 12px;
  cursor: pointer;
`
