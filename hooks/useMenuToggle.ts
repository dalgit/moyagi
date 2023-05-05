import { useEffect, useState, useRef, RefObject } from 'react'

interface IUseMenu<T extends HTMLElement> {
  isMenuOpen: boolean
  handleMenuClick: () => void
  ref: RefObject<T>
}

const useMenu = <T extends HTMLElement>(): IUseMenu<T> => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const ref = useRef<T>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return { isMenuOpen, handleMenuClick, ref }
}

export default useMenu
