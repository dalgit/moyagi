import { useRecoilState } from 'recoil'
import { fileAtom } from 'recoil/file/fileAtom'
import { uploadImage } from 'utils/uploadImage'

const useUploadImage = () => {
  const [file, setFile] = useRecoilState(fileAtom)

  const getUplodedImageUrl = async () => {
    if (!file) return

    return await uploadImage(file)
  }

  const handleFileSet = (file: File) => {
    setFile(file)
  }

  return { handleFileSet, getUplodedImageUrl }
}

export default useUploadImage
