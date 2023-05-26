import { useUserPosts } from 'components/Post/hooks/useUserPosts'
import { useRecoilValue } from 'recoil'
import Layout from 'components/Layout/Layout'
import PostList from 'features/Post/PostList/PostList'
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
