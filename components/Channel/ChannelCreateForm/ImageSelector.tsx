import { useState, useRef } from 'react'
import styled from 'styled-components'
import FImage from '@/components/common/FImage'
import { addDefaultImage, cameraIcon } from '@/constants/defaultImage'

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
    <ImageSelectorLayout onClick={handleClickSelector} className={className}>
      <SelectedImage src={previewImg} alt="preview" />
      {label && <label htmlFor="fileInput">{label}</label>}
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
  align-items: center;
  width: 250px;
  gap: 10px;
  position: relative;

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
  border-radius: 50%;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    width: 65px;
    height: 65px;
    background-image: url(${cameraIcon});
    background-size: contain;
  }
`
