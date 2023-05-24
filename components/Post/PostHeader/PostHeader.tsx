import Avatar from '@/components/common/Avatar/Avatar'
import { userDefaultImage } from '@/constants/defaultImage'
import { IPost } from '@/types/post'
import PostHeaderMenu from './Components/PostHeaderMenu'
import * as S from './style'

interface PostHeaderProps {
  post: IPost
}

const PostHeader = ({ post }: PostHeaderProps) => {
  return (
    <S.PostHeaderLayout>
      <Avatar
        image={post.author.imageUrl || userDefaultImage}
        name={post.author.name}
      />
      <PostHeaderMenu post={post} />
    </S.PostHeaderLayout>
  )
}

export default PostHeader
