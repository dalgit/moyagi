import TabContent from './TabContent'
import TabMain from './TabMain'
import TabPair from './TabPair'
import TabTitle from './TabTitle'

export const Tab = Object.assign(TabMain, {
  Pair: TabPair,
  Title: TabTitle,
  Content: TabContent,
})
