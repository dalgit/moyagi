import React, { useState } from 'react'

interface ListItemProps extends LiHTMLAttributes<HTMLLIElement> {
  right: ReactNode
}

const Dropdown = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <ul>
      <button onClick={handleToggle}>드롭다운</button>
      {isOpen && <ul>{children}</ul>}
    </ul>
  )
}

export default Dropdown
