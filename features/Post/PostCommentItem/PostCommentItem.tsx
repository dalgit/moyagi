import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'
import { Button } from 'components/common'
import { userDefaultImage } from 'constants/defaultImage'
import useDeleteComment from 'hooks/post/useDeleteComment'
import channelIdSelector from 'recoil/channel/channelIdSelector'
import { IComment } from 'types/post'
import getFormattedDate from 'utils/getFormattedDate'
import * as S from './style'

interface PostCommentItemProps {
  comment: IComment
  postId: string
}

const PostCommentItem = ({ comment, postId }: PostCommentItemProps) => {
  const { author, content, createdAt } = comment
  const FormattedDate = getFormattedDate(createdAt)
  const channelId = useRecoilValue(channelIdSelector)
  const { mutate: deleteCommentMutate } = useDeleteComment()

  const router = useRouter()

  const handleUserClick = () => {
    router.push(`/users/${author._id}`)
  }

  const handleCommentDelete = () => {
    if (window.confirm('정말 삭제할까요?')) {
      deleteCommentMutate({ postId, channelId, commentId: comment._id })
    }
  }

  return (
    <S.PostCommentItemLayout>
      <S.Wrapper>
        <S.UserIcon
          src={author.imageUrl || userDefaultImage}
          onClick={handleUserClick}
        />
        <S.InnerWrapper>
          <S.AtuhorName>{author.name}</S.AtuhorName>
          <S.StyledComment>{content}</S.StyledComment>
        </S.InnerWrapper>
      </S.Wrapper>
      <S.RightWrapper>
        <S.CommentDate>{FormattedDate}</S.CommentDate>
        <Button variant="sub" onClick={handleCommentDelete}>
          삭제
        </Button>
      </S.RightWrapper>
    </S.PostCommentItemLayout>
  )
}

export default PostCommentItem
