import { useRouter } from 'next/router'
import { LiHTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'
import FImage from '../FImage'

interface ListItemProps {
  title: string
  href?: string
  imageSrc?: string
}

const ListItem = ({ href, imageSrc, title }: ListItemProps) => {
  const { push } = useRouter()

  const handleClick = () => {
    href && push(href)
  }

  return (
    <ListItemLayout onClick={handleClick}>
      {imageSrc && <StyledImage src={imageSrc} />}
      <Title>{title}</Title>
    </ListItemLayout>
  )
}

interface Props extends LiHTMLAttributes<HTMLLIElement> {
  right: ReactNode
}

const ListItem2 = ({ children, right, ...props }: Props) => {
  return (
    <ListItemLayout {...props}>
      {children}
      {right}
    </ListItemLayout>
  )
}

export default ListItem

const StyledImage = styled(FImage)`
  border-radius: 50%;
  min-width: 30px;
  height: 30px;
`

const ListItemLayout = styled.li`
  display: flex;
  background-color: white;
  padding: 5px;
  gap: 5px;

  :hover {
    opacity: 0.6;
    cursor: pointer;
  }
`
const Title = styled.div`
  padding: 5px;
  font-weight: bold;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`
