import { useRecoilValue } from 'recoil'
import { Avatar, UserLink } from 'components/common'
import isMeSelector from 'recoil/user/isMe'
import { IPost } from 'types/post'
import getFormattedDate from 'utils/common/getFormattedDate'
import { withUser } from 'utils/common/withDefaultImage'
import AuthorMenuList from './AuthorMenuList/AuthorMenuList'
import * as S from './style'
import UserMenuList from './UserMenuList/UserMenuList'

type PostHeaderProps = Pick<IPost, 'postId' | 'author' | 'createdAt'>

const PostHeader = ({ postId, author, createdAt }: PostHeaderProps) => {
  const isMyPost = useRecoilValue(isMeSelector(author._id))
  const FormattedDate = getFormattedDate(createdAt)

  return (
    <S.PostHeaderLayout>
      <UserLink href={author._id}>
        <Avatar image={withUser(author.imageUrl)} name={author.name} />
      </UserLink>
      <S.Wrapper>
        <span>{FormattedDate}</span>
        {isMyPost ? (
          <AuthorMenuList postId={postId} />
        ) : (
          <UserMenuList authorId={author._id} />
        )}
      </S.Wrapper>
    </S.PostHeaderLayout>
  )
}

export default PostHeader
