import { NotificationBox } from 'components/common'
import { PostList } from 'features/Post'
import { useShouldFetchPosts } from 'hooks/channel/useChannelData'
import { useChannelPostsQuery } from 'hooks/post'

const ChannelPostList = () => {
  const shouldFetchPosts = useShouldFetchPosts()

  const { data: posts = [] } = useChannelPostsQuery({
    suspense: true,
    enabled: shouldFetchPosts,
  })

  if (!shouldFetchPosts) {
    return (
      <NotificationBox
        title="비공개 채널입니다."
        description="가입후 이용해주세요"
        type="sorry"
      />
    )
  }

  if (!posts.length) {
    return (
      <NotificationBox
        title="작성된 게시물이 없습니다."
        description="첫 글을 작성해보세요"
        type="empty"
      />
    )
  }

  return <PostList posts={posts} />
}

export default ChannelPostList
