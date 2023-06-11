import { ReactNode } from 'react'
import styled from 'styled-components'
import { useTabContext } from './hooks/useTabContext'
import { Actions } from './hooks/useTabReducer'

interface TabTitleProps {
  children: ReactNode
  idx: number
}

const TabTitle = ({ children, idx }: TabTitleProps) => {
  const { state, dispatch } = useTabContext()
  const { activeIdx } = state
  const isActive = activeIdx === idx

  const handleClick = () => {
    dispatch({ type: Actions.Set, idx })
  }

  return (
    <Title onClick={handleClick} isActive={isActive}>
      {children}
    </Title>
  )
}

export default TabTitle

const Title = styled.li<{ isActive: boolean }>`
  font-weight: bolder;
  cursor: pointer;

  :hover {
    opacity: ${({ isActive }) => !isActive && '0.6'};
  }

  color: ${({ isActive }) => (isActive ? 'black' : 'gray')};
`
