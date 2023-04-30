import { ReactNode, Children } from 'react'

interface TabItemProps {
  currentIdx: number
  children: ReactNode
}

const TabItemList = ({ currentIdx, children }: TabItemProps) => {
  const currentItem = Children.toArray(children).filter(
    (_, idx) => idx === currentIdx,
  )

  return <>{currentItem}</>
}

export default TabItemList
