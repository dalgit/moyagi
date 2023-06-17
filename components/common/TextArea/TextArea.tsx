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
  value,
  maxLine = 6,
  rows = 1,
  ...rest
}: TextAreaProps) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  const checkMaxLine = useCallback(() => {
    const textAreaElement = textAreaRef.current

    if (textAreaElement) {
      const lineHeight = window.getComputedStyle(textAreaElement).lineHeight
      const maxHeight = (maxLine + 1) * parseInt(lineHeight)
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

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      if (checkMaxLine()) {
        onChange(e)
      }
    },
    [checkMaxLine, onChange],
  )

  useLayoutEffect(() => {
    handleResizeHeight()
  }, [handleResizeHeight, value])

  return (
    <S.StyledTextArea
      rows={rows}
      value={value}
      ref={textAreaRef}
      onChange={handleInputChange}
      {...rest}
    />
  )
}

export default TextArea
