import { Avatar, UserLink } from 'components/common'
import { IPost } from 'types/post'
import getFormattedDate from 'utils/common/getFormattedDate'
import { withUser } from 'utils/common/withDefaultImage'
import PostHeaderMenuList from './PostHeaderMenuList'
import * as S from './style'

type PostHeaderProps = Pick<IPost, 'postId' | 'author' | 'createdAt'>

const PostHeader = ({ postId, author, createdAt }: PostHeaderProps) => {
  return (
    <S.PostHeaderLayout>
      <UserLink href={author._id}>
        <Avatar image={withUser(author.imageUrl)} name={author.name} />
      </UserLink>
      <S.Wrapper>
        <span>{getFormattedDate(createdAt)}</span>
        <PostHeaderMenuList postId={postId} />
      </S.Wrapper>
    </S.PostHeaderLayout>
  )
}

export default PostHeader
