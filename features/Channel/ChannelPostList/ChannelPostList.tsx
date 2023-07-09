import { ViewBoundary } from 'components/common/Boundary'
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
    <ViewBoundary view="channelPosts" data={posts} enabled={shouldFetchPosts}>
      <PostList posts={posts} />
    </ViewBoundary>
  )
}

export default ChannelPostList
