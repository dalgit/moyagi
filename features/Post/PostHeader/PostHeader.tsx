import { Avatar } from 'components/common'
import { IPost } from 'types/post'
import getFormattedDate from 'utils/common/getFormattedDate'
import PostHeaderMenuList from './PostHeaderMenuList'
import * as S from './style'

type PostHeaderProps = Pick<IPost, 'postId' | 'author' | 'createdAt'>

const PostHeader = ({ postId, author, createdAt }: PostHeaderProps) => {
  return (
    <S.PostHeaderLayout>
      <Avatar
        image={author.imageUrl}
        name={author.name}
        href={`/users/${author._id}`}
        type="user"
      />
      <S.Wrapper>
        <span>{getFormattedDate(createdAt)}</span>
        <PostHeaderMenuList postId={postId} />
      </S.Wrapper>
    </S.PostHeaderLayout>
  )
}

export default PostHeader
