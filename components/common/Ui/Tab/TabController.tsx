import { Children, ReactElement } from 'react'
import TabContent from './TabContent'
import TabContentList from './TabContentList'
import TabPair from './TabPair'
import TabTitle from './TabTitle'
import TabTitleList from './TabTitleList'

interface TabControllerProps {
  children: ReactElement[]
}

const TabController = ({ children }: TabControllerProps) => {
  const tabTitles: ReactElement[] = []
  const tabContents: ReactElement[] = []

  Children.forEach(children, (child) => {
    if (child.type !== TabPair) return
    Children.forEach(child.props.children, (pairChild) => {
      const { type } = pairChild

      if (type === TabTitle) {
        tabTitles.push(pairChild)
      }

      if (type === TabContent) {
        tabContents.push(pairChild)
      }
    })
  })

  return (
    <>
      <TabTitleList>{tabTitles}</TabTitleList>
      <TabContentList>{tabContents}</TabContentList>
    </>
  )
}

export default TabController
