import { ReactElement } from 'react'

interface TabPairProps {
  children: ReactElement[]
}

const TabPair = ({ children }: TabPairProps) => {
  return <>{children}</>
}

export default TabPair
