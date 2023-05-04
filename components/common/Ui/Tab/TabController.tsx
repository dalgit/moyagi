import { Children, ReactElement, cloneElement } from 'react'
import TabContent from './TabContent'
import TabContentList from './TabContentList'
import TabPair from './TabPair'
import TabTitle from './TabTitle'
import TabTitleList from './TabTitleList'

interface TabControllerProps {
  children: ReactElement[]
}

interface ClassifiedData {
  tabTitles: ReactElement[]
  tabContents: ReactElement[]
}

const TabController = ({ children }: TabControllerProps) => {
  const { tabTitles, tabContents } = getClassifiedData(children)

  return (
    <>
      <TabTitleList>{tabTitles}</TabTitleList>
      <TabContentList>{tabContents}</TabContentList>
    </>
  )
}

export default TabController

const getClassifiedData = (children: ReactElement[]): ClassifiedData => {
  const tabTitles: ReactElement[] = []
  const tabContents: ReactElement[] = []

  const handleChild = (child: ReactElement, idx?: number) => {
    if (child.type === TabPair) {
      Children.forEach(child.props.children, (pairChild) => {
        const indexedChild = cloneElement(pairChild, { idx })

        if (pairChild.type === TabTitle) {
          tabTitles.push(indexedChild)
        }

        if (pairChild.type === TabContent) {
          tabContents.push(indexedChild)
        }
      })
    } else if (typeof child.type === 'function') {
      const { type } = child
      handleChild((type as () => ReactElement)())
    }
  }

  Children.forEach(children, (child, idx) => {
    handleChild(child, idx)
  })

  return { tabTitles, tabContents }
}
