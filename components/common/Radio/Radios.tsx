import { ReactNode } from 'react'
import styled from 'styled-components'
import { RadioContext, IRadioContextProps } from './RadioContext'

interface RadiosProps extends IRadioContextProps {
  label: string
  children: ReactNode
}

const Radios = ({ label, children, ...rest }: RadiosProps) => {
  return (
    <>
      <LabelStyled>{label}</LabelStyled>
      <RadioContext.Provider value={rest}>
        <RadiosLayout>{children}</RadiosLayout>
      </RadioContext.Provider>
    </>
  )
}

export default Radios

const RadiosLayout = styled.div`
  display: flex;
  justify-content: space-around;
  border: 1px solid red;
  background-color: white;
  border: 0.8px solid #a6afb8;
  border-radius: 4px;
`

const LabelStyled = styled.label`
  display: block;
  font-size: 15px;
  margin-left: 5px;
  font-weight: bolder;
`
