import { createContext, useContext } from 'react'

export interface IRadioContextProps {
  name: string
  currentValue: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

type RadioContextProps = IRadioContextProps | undefined

export const RadioContext = createContext<RadioContextProps>(undefined)

export const useRadioContext = () => {
  const context = useContext(RadioContext)

  if (context === undefined) {
    throw new Error()
  }

  return context
}
