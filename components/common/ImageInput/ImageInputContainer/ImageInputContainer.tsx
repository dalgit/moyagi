import { useRef, ReactNode } from 'react'
import { useUploadImage } from 'hooks/common'
import * as S from './style'

interface ImageInputContainerProps {
  atomKey: string
  children: ReactNode
}

const ImageInputContainer = ({
  atomKey,
  children,
  ...rest
}: ImageInputContainerProps) => {
  const ref = useRef<HTMLInputElement>(null)
  const { setFile } = useUploadImage()

  const handleInputChange = () => {
    if (!ref.current?.files) return
    const [file] = ref.current.files
    setFile(atomKey, file)
  }

  const handleImageInput = () => {
    ref.current && ref.current.click()
  }

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
