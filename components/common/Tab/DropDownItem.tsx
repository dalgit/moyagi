import { useState } from 'react'

const DropDownItem = ({ children, render }: any) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <div onClick={toggle}>{children}</div>
      {isOpen && render()}
    </div>
  )
}

export default DropDownItem
