import { useRouter } from 'next/router'
import { userDefaultImage } from 'constants/defaultImage'
import { IComment } from 'types/post'
import * as S from './style'

interface PostCommentItemProps {
  comment: IComment
}

const PostCommentItem = ({ comment }: PostCommentItemProps) => {
  const { author, content } = comment
  const router = useRouter()

  const handleUserClick = () => {
    router.push(`/users/${author._id}`)
  }

  return (
    <S.PostCommentItemLayout>
      <S.UserIcon
        src={author.imageUrl || userDefaultImage}
        onClick={handleUserClick}
      />
      <S.Wrapper>
        <S.AtuhorName>{author.name}</S.AtuhorName>
        <S.StyledComment>{content}</S.StyledComment>
      </S.Wrapper>
    </S.PostCommentItemLayout>
  )
}

export default PostCommentItem
