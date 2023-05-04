import styled from 'styled-components'
import Image from 'next/image'
import tmp from '/public/assets/smile_emotion_icon.png'

const PostCommentBox = () => {
  return (
    <PostCommentBoxLayout>
      <Image src={tmp} alt="emotion_icon" height={30} />
      <CommentArea />
      <Button>전송</Button>
    </PostCommentBoxLayout>
  )
}

export default PostCommentBox

const PostCommentBoxLayout = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`

const CommentArea = styled.textarea`
  border-radius: 15px;
  resize: none;
  flex: 1;
`

const Button = styled.button`
  width: 50px;
`