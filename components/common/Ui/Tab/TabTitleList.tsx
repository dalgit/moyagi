import { Children, cloneElement, ReactElement } from 'react'
import styled from 'styled-components'

interface TabTitleListProps {
  children: ReactElement[]
}

const TabTitleList = ({ children }: TabTitleListProps) => {
  return (
    <ListLayout>
      {Children.map(children, (child, idx) => {
        return cloneElement(child, { idx })
      })}
    </ListLayout>
  )
}

export default TabTitleList

const ListLayout = styled.ul`
  display: flex;
  font-size: 25px;
  gap: 30px;
`
