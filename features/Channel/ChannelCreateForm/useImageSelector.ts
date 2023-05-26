import { useState, useRef } from 'react'
import { addDefaultImage } from 'constants/defaultImage'

const useImageSelector = ({ defaultImage, setFile }: any) => {
  const [previewImage, setPreviewImage] = useState<string>(
    defaultImage || addDefaultImage,
  )

  const ref = useRef<HTMLInputElement>(null)

  const handleClickImage = () => {
    ref.current && ref.current.click()
  }

  const handleInputChange = () => {
    if (!ref.current?.files) return
    const [file] = ref.current.files
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setPreviewImage(reader.result as string)
      setFile(file)
    }
  }

  return {
    previewImage,
    handleClickImage,
    handleInputChange,
  }
}

export default useImageSelector
