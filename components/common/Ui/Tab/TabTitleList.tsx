import {
  Children,
  cloneElement,
  ReactNode,
  Dispatch,
  ReactElement,
} from 'react'
import styled from 'styled-components'

interface TabTitleListProps {
  children: ReactNode
  setIdx: Dispatch<React.SetStateAction<number>>
}

const TabTitleList = ({ children, setIdx }: TabTitleListProps) => {
  const handleClick = (idx: number) => {
    setIdx(idx)
  }

  return (
    <ListLayout>
      {Children.map(children, (child, idx) => {
        return cloneElement(child as ReactElement, {
          onClick: () => handleClick(idx),
        })
      })}
    </ListLayout>
  )
}

export default TabTitleList

const ListLayout = styled.ul`
  display: flex;
  font-size: 25px;
  gap: 30px;

  li {
    font-weight: bolder;
    cursor: pointer;

    :hover {
      opacity: 0.6;
    }
  }
`
