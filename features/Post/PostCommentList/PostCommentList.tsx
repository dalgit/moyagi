import React from 'react'
import { IPost } from 'types/post'
import * as S from './style'
import PostCommentItem from '../PostCommentItem/PostCommentItem'

type PostCommentListProps = Pick<IPost, 'postId' | 'comments'>

const PostCommentList = ({ comments, postId }: PostCommentListProps) => {
  return (
    <S.PostCommentListLayout>
      {comments.map((comment) => (
        <PostCommentItem key={comment._id} postId={postId} comment={comment} />
      ))}
    </S.PostCommentListLayout>
  )
}

export default PostCommentList
