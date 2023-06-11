import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'
import { Button } from 'components/common'
import { USER_PATH } from 'constants/paths'
import useCheckMe from 'hooks/common/useCheckMe'
import useDeleteComment from 'hooks/post/useDeleteComment'
import channelIdSelector from 'recoil/channel/channelIdSelector'
import { IComment } from 'types/post'
import getFormattedDate from 'utils/common/getFormattedDate'
import { withUser } from 'utils/common/withDefaultImage'
import * as S from './style'

interface PostCommentItemProps {
  comment: IComment
  postId: string
}

const PostCommentItem = ({ comment, postId }: PostCommentItemProps) => {
  const { author, content, createdAt } = comment
  const FormattedDate = getFormattedDate(createdAt)
  const { mutate: deleteCommentMutate } = useDeleteComment()
  const channelId = useRecoilValue(channelIdSelector)
  const isMe = useCheckMe(author._id)
  const router = useRouter()

  const handleUserClick = () => {
    router.push(`${USER_PATH}/${author._id}`)
  }

  const handleCommentDelete = () => {
    if (window.confirm('정말 삭제할까요?')) {
      deleteCommentMutate({ postId, channelId, commentId: comment._id })
    }
  }

  return (
    <S.PostCommentItemLayout>
      <S.Wrapper>
        <S.UserIcon src={withUser(author.imageUrl)} onClick={handleUserClick} />
        <S.InnerWrapper>
          <S.AtuhorName>{author.name}</S.AtuhorName>
          <S.StyledComment>{content}</S.StyledComment>
        </S.InnerWrapper>
      </S.Wrapper>
      <S.RightWrapper>
        <S.CommentDate>{FormattedDate}</S.CommentDate>
        {isMe && (
          <Button variant="sub" onClick={handleCommentDelete}>
            삭제
          </Button>
        )}
      </S.RightWrapper>
    </S.PostCommentItemLayout>
  )
}

export default PostCommentItem
