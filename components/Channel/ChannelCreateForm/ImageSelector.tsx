import { useState, useRef } from 'react'
import { RiImageAddLine } from 'react-icons/ri'
import styled from 'styled-components'
import FImage from '@/components/common/FImage'

interface ImageSelectorHandler {
  setFile: React.Dispatch<React.SetStateAction<File | undefined>>
}

const ImageSelector = ({ setFile }: ImageSelectorHandler) => {
  const ref = useRef<HTMLInputElement>(null)
  const [previewImg, setPreviewImg] = useState<string>('')

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

  return (
    <ImageSelectorLayout>
      {previewImg ? (
        <SelectedImage src={previewImg} alt="preview" />
      ) : (
        <AddIcon />
      )}
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
  gap: 2px;
  border-radius: 12px;

  label {
    text-align: center;
    border-radius: 5px;
    padding: 10px;
    background-color: #7bcfb5;
    color: #fff;
  }
  input {
    display: none;
  }
`

const AddIcon = styled(RiImageAddLine)`
  background-color: white;
  width: inherit;
  height: inherit;
`

const SelectedImage = styled(FImage)`
  width: inherit;
  height: inherit;
  border-radius: inherit;
`
