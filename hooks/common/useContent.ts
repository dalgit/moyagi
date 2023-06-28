import { useState, ChangeEvent } from 'react'

const useContent = (initialContent = '') => {
  const [content, setContent] = useState(initialContent)

  const handleContentChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setContent(e.target.value)
  }

  const handleContentSubmit = (submitEvent: () => void) => {
    if (content === '') return
    submitEvent()
    setContent('')
  }

  return { content, setContent, handleContentChange, handleContentSubmit }
}

export default useContent
