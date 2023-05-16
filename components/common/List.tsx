import { ReactNode } from 'react'
import styled from 'styled-components'

interface ListProps {
  children: ReactNode
  className?: string
}

const List = ({ children, ...rest }: ListProps) => {
  return <ListLayout {...rest}>{children}</ListLayout>
}

export default List

const ListLayout = styled.ul`
  border: 0.5px solid rgba(27, 31, 35, 0.15);
  overflow: auto;

  li:not(:last-child) {
    border-bottom: 0.5px solid rgba(27, 31, 35, 0.15);
  }
`
