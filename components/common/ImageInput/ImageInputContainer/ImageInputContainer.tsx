import { useRef, ReactNode } from 'react'
import { useUploadImage } from 'hooks/common'
import useRouterEffect from 'hooks/common/useRouterEffect'
import * as S from './style'

interface ImageInputContainerProps {
  fileKey: string
  children: ReactNode
}

const ImageInputContainer = ({
  fileKey,
  children,
  ...rest
}: ImageInputContainerProps) => {
  const ref = useRef<HTMLInputElement>(null)
  const { setFile, removeFile } = useUploadImage()

  const handleInputChange = () => {
    if (!ref.current?.files) return
    const [file] = ref.current.files
    setFile(fileKey, file)
  }

  const handleImageInput = () => {
    ref.current && ref.current.click()
  }

  useRouterEffect(() => {
    removeFile(fileKey)
  })

  return (
    <S.ImageInputContainerLayout onClick={handleImageInput} {...rest}>
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        ref={ref}
        onChange={handleInputChange}
      />
      {children}
    </S.ImageInputContainerLayout>
  )
}

export default ImageInputContainer
