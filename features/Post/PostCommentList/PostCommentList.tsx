import React from 'react'
import { IComment } from 'types/post'
import * as S from './style'
import PostCommentItem from '../PostCommentItem/PostCommentItem'

interface PostCommentListProps {
  comments: IComment[]
}

const PostCommentList = ({ comments }: PostCommentListProps) => {
  return (
    <S.PostCommentListLayout>
      {comments.map((comment) => (
        <PostCommentItem key={comment._id} comment={comment} />
      ))}
    </S.PostCommentListLayout>
  )
}

export default PostCommentList
