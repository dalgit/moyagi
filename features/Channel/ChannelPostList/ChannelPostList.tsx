import { NotificationBox } from 'components/common'
import { PostList } from 'features/Post'
import { useShouldFetchPosts } from 'hooks/channel/useChannelData'
import { useChannelPostsQuery } from 'hooks/post'
import { config } from './config'

const ChannelPostList = () => {
  const shouldFetchPosts = useShouldFetchPosts()

  const { data: posts = [] } = useChannelPostsQuery({
    suspense: true,
    enabled: shouldFetchPosts,
  })

  if (!shouldFetchPosts) {
    return <NotificationBox {...config.noPublic} />
  }

  if (!posts.length) {
    return <NotificationBox {...config.noPost} />
  }

  return <PostList posts={posts} />
}

export default ChannelPostList
