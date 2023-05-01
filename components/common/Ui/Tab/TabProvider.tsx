import { ReactNode } from 'react'
import { TabContext } from './hooks/useTabContext'
import { useTabReducer } from './hooks/useTabReducer'

interface TabProviderProps {
  children: ReactNode
}
export const TabProvider = ({ children }: TabProviderProps) => {
  const [state, dispatch] = useTabReducer()

  return (
    <TabContext.Provider value={{ state, dispatch }}>
      {children}
    </TabContext.Provider>
  )
}
