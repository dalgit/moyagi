import { useRecoilValue } from 'recoil'
import MoreMenu from 'components/common/MoreMenu/MoreMenu'
import userIdSelector from 'recoil/user/userIdSelector'
import { IPost } from 'types/post'
import AuthorMenuList from './AuthorMenuList'
import UserMenuList from './UserMenuList'

interface PostHeaderMenuProps {
  post: IPost
}

const PostHeaderMenu = ({ post }: PostHeaderMenuProps) => {
  const { author, channel } = post

  const userId = useRecoilValue(userIdSelector)
  const isMyPost = author._id === userId

  return (
    <MoreMenu>
      {isMyPost ? (
        <AuthorMenuList postId={post._id} channelId={channel._id} />
      ) : (
        <UserMenuList authorId={post.author._id} />
      )}
    </MoreMenu>
  )
}

export default PostHeaderMenu
