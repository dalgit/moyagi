import { Children, Dispatch, createContext, ReactElement } from 'react'
import TabContent from '../Ui/Tab/TabContent'
import TabContentList from '../Ui/Tab/TabContentList'
import TabPair from '../Ui/Tab/TabPair'
import TabTitle from '../Ui/Tab/TabTitle'
import TabTitleList from '../Ui/Tab/TabTitleList'

interface TabProps {
  children: ReactElement[]
  currentIdx: number
  setIdx: Dispatch<React.SetStateAction<number>>
}

export const TabContext = createContext({})

const Tab = ({ children, currentIdx }: TabProps) => {
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
    <TabContext.Provider value={currentIdx}>
      <TabTitleList>{tabTitles}</TabTitleList>
      <TabContentList>{tabContents}</TabContentList>
    </TabContext.Provider>
  )
}

export default Tab
