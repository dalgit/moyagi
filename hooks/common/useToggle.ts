import { useState } from 'react'

const useToggle = (): [boolean, () => void, () => void] => {
  const [isActive, setIsActive] = useState<boolean>(false)

  const toggle = () => {
    setIsActive(!isActive)
  }

  const setInActive = () => {
    setIsActive(false)
  }

  return [isActive, toggle, setInActive]
}

export default useToggle
