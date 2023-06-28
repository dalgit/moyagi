import { useCheckMyPost } from 'hooks/post/usePostById'
import AuthorMenuList from './AuthorMenuList'
import UserMenuList from './UserMenuList'

interface Props {
  postId: string
}

const PostHeaderMenuList = ({ postId }: Props) => {
  const isMyPost = useCheckMyPost(postId)
  const MenuList = isMyPost ? AuthorMenuList : UserMenuList

  return <MenuList postId={postId} />
}
export default PostHeaderMenuList
