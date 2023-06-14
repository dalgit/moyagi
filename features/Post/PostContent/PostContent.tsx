import { IPost } from 'types/post'
import * as S from './style'

type PostContentProps = Pick<IPost, 'content'>

const PostContent = ({ content }: PostContentProps) => {
  return <S.PostContentLayout dangerouslySetInnerHTML={{ __html: content }} />
}

export default PostContent
