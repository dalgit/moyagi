import { Avatar, MoreMenu, UserLink } from 'components/common'
import { useCheckMe } from 'hooks/common'
import { IUser } from 'types/user'
import getFormattedDate from 'utils/common/getFormattedDate'
import { withUser } from 'utils/common/withDefaultImage'
import AuthorMenuList from './AuthorMenuList/AuthorMenuList'
import * as S from './style'
import UserMenuList from './UserMenuList/UserMenuList'

interface PostHeaderProps {
  postId: string
  author: IUser
  createdAt: Date
}

const PostHeader = ({ postId, author, createdAt }: PostHeaderProps) => {
  const isMyPost = useCheckMe(author._id)
  const FormattedDate = getFormattedDate(createdAt)

  return (
    <S.PostHeaderLayout>
      <UserLink href={author._id}>
        <Avatar image={withUser(author.imageUrl)} name={author.name} />
      </UserLink>
      <S.Wrapper>
        <span>{FormattedDate}</span>
        <MoreMenu>
          {isMyPost ? (
            <AuthorMenuList postId={postId} />
          ) : (
            <UserMenuList authorId={author._id} />
          )}
        </MoreMenu>
      </S.Wrapper>
    </S.PostHeaderLayout>
  )
}

export default PostHeader
