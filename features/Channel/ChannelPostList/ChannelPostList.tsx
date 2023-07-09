import { ViewBoundary } from 'components/common/Boundary/ViewBoundary'
import { PostList } from 'features/Post'
import { useShouldFetchPosts } from 'hooks/channel/useChannelData'
import { useChannelPostsQuery } from 'hooks/post'

const ChannelPostList = () => {
  const shouldFetchPosts = useShouldFetchPosts()

  const { data: posts = [] } = useChannelPostsQuery({
    suspense: true,
    enabled: shouldFetchPosts,
  })

  return (
    <ViewBoundary data={posts} enabled={shouldFetchPosts} view="channelPosts">
      <PostList posts={posts} />
    </ViewBoundary>
  )
}

export default ChannelPostList
