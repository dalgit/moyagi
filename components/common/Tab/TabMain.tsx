import { ReactElement } from 'react'
import TabController from './TabController'
import { TabProvider } from './TabProvider'

interface TabMainProps {
  children: ReactElement[]
}

const TabMain = ({ children }: TabMainProps) => {
  return (
    <TabProvider>
      <TabController>{children}</TabController>
    </TabProvider>
  )
}

export default TabMain
