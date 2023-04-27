import Image from 'next/image'
import { useRouter } from 'next/router'
import styled from 'styled-components'

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
      {imageSrc && (
        <ImageWrapper>
          <Image src={imageSrc} alt="thumbnail" fill />
        </ImageWrapper>
      )}
      <Title>{title}</Title>
    </ListItemLayout>
  )
}

export default ListItem

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

const ImageWrapper = styled.div`
  position: relative;
  border-radius: 50%;
  width: 30px;
  img {
    border-radius: inherit;
  }
`

const Title = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */

  padding: 5px;

  font-weight: bold;
`
