import Image from 'next/image'
import styled from 'styled-components'
import { IUser } from '@/types/user'
import MoreButton from '../../common/MoreButton/MoreButton'
import tmp from '/public/assets/tmp.png'

interface PostHeaderProps {
  author: IUser
}

const PostHeader = ({ author }: PostHeaderProps) => {
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
