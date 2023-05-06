import { ReactNode } from 'react'

interface TabTitleProps {
  children: ReactNode
}

const TabContent = ({ children }: TabTitleProps) => {
  return <div>{children}</div>
}

export default TabContent
