import { useRecoilValue } from 'recoil'
import { Layout } from 'components/Template'
import { PostList } from 'features/Post'
import { useUserPosts } from 'hooks/post/useUserPosts'
import { userIdSelector } from 'recoil/user'

const UserPostsPage = () => {
  const userId = useRecoilValue(userIdSelector)
  const { data: posts = [] } = useUserPosts(userId || '')

  if (!posts.length) return null

  return (
    <Layout>
      <h2>내 게시물</h2>
      <PostList posts={posts} />
    </Layout>
  )
}

export default UserPostsPage
