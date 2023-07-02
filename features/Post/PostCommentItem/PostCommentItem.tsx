import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'
import { Avatar, Button } from 'components/common'
import { USER_PATH } from 'constants/paths'
import { useChannel } from 'hooks/channel'
import useDeleteComment from 'hooks/post/useDeleteComment'
import isMeSelector from 'recoil/user/isMe'
import { IComment } from 'types/post'
import getFormattedDate from 'utils/common/getFormattedDate'
import * as S from './style'

interface PostCommentItemProps {
  comment: IComment
  postId: string
}

const PostCommentItem = ({ comment, postId }: PostCommentItemProps) => {
  const { author, content, createdAt } = comment
  const { mutate: deleteCommentMutate } = useDeleteComment()
  const isMyComment = useRecoilValue(isMeSelector(author._id))
  const { _id: channelId } = useChannel()
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
      <S.LeftWrapper>
        <Avatar
          image={author.imageUrl}
          type="user"
          size={30}
          onClick={handleUserClick}
        />
        <S.InnerWrapper>
          <S.AtuhorName>{author.name}</S.AtuhorName>
          <S.StyledComment>{content}</S.StyledComment>
        </S.InnerWrapper>
      </S.LeftWrapper>
      <S.RightWrapper>
        <S.CommentDate>{getFormattedDate(createdAt)}</S.CommentDate>
        {isMyComment && (
          <Button variant="sub" onClick={handleCommentDelete}>
            삭제
          </Button>
        )}
      </S.RightWrapper>
    </S.PostCommentItemLayout>
  )
}

export default PostCommentItem
