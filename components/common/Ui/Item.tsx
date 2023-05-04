import { useRouter } from 'next/router'
import styled from 'styled-components'
import FImage from './FImage'

interface ListItemProps {
  title: string
  href?: string
  imageSrc?: string
}

const Item = ({ href, imageSrc, title }: ListItemProps) => {
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

export default ListItem

const StyledImage = styled(FImage)`
  border-radius: 50%;
  width: 30px;
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
`
