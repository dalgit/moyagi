import { useState } from 'react'
import { uploadImage } from 'utils/uploadImage'

const useUploadImage = () => {
  const [file, setFile] = useState<File>()

  const handleImageUpload = async () => {
    if (!file) return
    const imageUrl = await uploadImage(file)

    return imageUrl
  }

  return { setFile, handleImageUpload }
}

export default useUploadImage
