import {
  BoxType,
  NotificationBox,
} from 'components/common/NotificationBox/NotificationBox'
import { PostList } from 'features/Post'
import { useChannelPosts } from 'hooks/post'

interface ChannelPostListProps {
  channelId: string
}
const ChannelPostList = ({ channelId }: ChannelPostListProps) => {
  const { data: posts = [] } = useChannelPosts(channelId, { suspense: true })

  if (!posts.length) {
    return (
      <NotificationBox
        title="작성된 게시물이 없습니다."
        description="첫 글을 작성해보세요"
        type={BoxType.empty}
      />
    )
  }

  return <PostList posts={posts} />
}

export default ChannelPostList
