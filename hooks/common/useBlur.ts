import { useState } from 'react'

const useBlur = () => {
  const [isBlurred, setIsBlurred] = useState<{ [key: string]: boolean }>({})

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsBlurred({ ...isBlurred, [e.target.name]: true })
  }

  return { isBlurred, handleBlur }
}

export default useBlur
