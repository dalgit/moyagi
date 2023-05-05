import styled from 'styled-components'
import FImage from '@/components/common/Ui/FImage'
import { IPost } from '@/types/post'
import tmp from '/public/assets/tmp.png'
import PostHeaderMenu from './PostHeaderMenu'

interface PostHeaderProps {
  post: IPost
}

const PostHeader = ({ post }: PostHeaderProps) => {
  return (
    <PostHeaderLayout>
      <UserBox>
        <ProfileImage src={tmp} alt="logo_icon" />
        <span>{post.author.name}</span>
      </UserBox>
      <PostHeaderMenu post={post} />
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

const ProfileImage = styled(FImage)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`
