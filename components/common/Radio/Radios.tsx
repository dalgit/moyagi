import { ReactNode } from 'react'
import { RadioContext, IRadioContextProps } from './RadioContext'
import * as S from './style'

interface RadiosProps extends IRadioContextProps {
  label: string
  children: ReactNode
}

const Radios = ({ label, children, ...rest }: RadiosProps) => {
  return (
    <>
      <S.RadiosTitle>{label}</S.RadiosTitle>
      <RadioContext.Provider value={rest}>
        <S.RadiosLayout>{children}</S.RadiosLayout>
      </RadioContext.Provider>
    </>
  )
}

export default Radios
