import { createContext, useContext, Dispatch } from 'react'
import { stateType, actionType } from './useTabReducer'

interface TabContextProps {
  state: stateType
  dispatch: Dispatch<actionType>
}

export const TabContext = createContext<TabContextProps | undefined>(undefined)

export const useTabContext = () => {
  const context = useContext(TabContext)

  if (context === undefined) {
    throw new Error('useTab() 함수는 TabProvider 내에서 사용되어야 합니다.')
  }

  return context
}
