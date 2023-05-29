import { useRef, useEffect } from 'react'

const useClickOutside = <T extends HTMLElement>(handler: () => void) => {
  const ref = useRef<T>(null)

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handler()
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [handler])

  return ref
}

export default useClickOutside
