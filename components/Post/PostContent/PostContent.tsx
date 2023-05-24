import * as S from './style'

interface PostContentProps {
  content: string
}

const PostContent = ({ content }: PostContentProps) => {
  return <S.PostContentLayout dangerouslySetInnerHTML={{ __html: content }} />
}

export default PostContent
