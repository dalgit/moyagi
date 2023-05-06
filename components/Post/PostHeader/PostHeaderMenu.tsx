import { useRecoilValue } from 'recoil'
import MoreMenu from '@/components/common/MoreMenu'
import { userSelector } from '@/recoil/user'
import { IPost } from '@/types/post'
import AuthorMenuList from './AuthorMenuList'
import UserMenuList from './UserMenuList'

interface PostHeaderMenuProps {
  post: IPost
}

const PostHeaderMenu = ({ post }: PostHeaderMenuProps) => {
  const { author, channel } = post

  const user = useRecoilValue(userSelector)
  const isMyPost = author._id === user?._id

  return (
    <MoreMenu>
      {isMyPost ? (
        <AuthorMenuList postId={post._id} channelId={channel._id} />
      ) : (
        <UserMenuList />
      )}
    </MoreMenu>
  )
}

export default PostHeaderMenu
