import React from 'react'
import { IComment } from 'types/post'
import * as S from './style'
import PostCommentItem from '../PostCommentItem/PostCommentItem'

interface PostCommentListProps {
  comments: IComment[]
  postId: string
}

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
