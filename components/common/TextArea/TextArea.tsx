import {
  useRef,
  useCallback,
  TextareaHTMLAttributes,
  ChangeEvent,
  useLayoutEffect,
} from 'react'
import * as S from './style'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  maxLine?: number
  rows?: number
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

const TextArea = ({
  onChange,
  maxLine = 6,
  rows = 1,
  ...rest
}: TextAreaProps) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  const checkMaxLine = useCallback(() => {
    const textAreaElement = textAreaRef.current

    if (textAreaElement) {
      const lineHeight = window.getComputedStyle(textAreaElement).lineHeight
      const maxHeight = maxLine * parseInt(lineHeight)

      return textAreaElement.scrollHeight < maxHeight
    }

    return false
  }, [maxLine])

  const handleResizeHeight = useCallback(() => {
    const textAreaElement = textAreaRef.current

    if (textAreaElement) {
      textAreaElement.style.height = 'auto'
      textAreaElement.style.height = textAreaElement.scrollHeight + 'px'
    }
  }, [])

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (checkMaxLine()) {
      handleResizeHeight()
      onChange(e)
    } else {
      alert('최대 작성 범위를 초과하였습니다.')
    }
  }

  useLayoutEffect(() => {
    handleResizeHeight()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <S.StyledTextArea
      rows={rows}
      ref={textAreaRef}
      onChange={handleInputChange}
      {...rest}
    />
  )
}

export default TextArea
