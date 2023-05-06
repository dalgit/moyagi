import { ReactElement, Children } from 'react'
import { useTabContext } from './hooks/useTabContext'

interface TabContentListProps {
  children: ReactElement[]
}

const TabContentList = ({ children }: TabContentListProps) => {
  const { state } = useTabContext()
  const { activeIdx } = state

  const currentContent = Children.toArray(children).filter(
    (_, idx) => idx === activeIdx,
  )

  return <>{currentContent}</>
}

export default TabContentList
