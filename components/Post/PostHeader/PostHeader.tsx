import styled from 'styled-components'
import MoreButton from '../../common/MoreButton/MoreButton'
import Image from 'next/image'
import tmp from '/public/assets/tmp.png'

const PostHeader = ({ author }: any) => {
  return (
    <PostHeaderLayout>
      <UserBox>
        <Image src={tmp} alt="logo_icon" width={30} height={30} />
        {author.name}
      </UserBox>
      <MoreButton />
    </PostHeaderLayout>
  )
}

export default PostHeader

const PostHeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
`

const UserBox = styled.div`
  display: flex;
  align-items: center;
`
