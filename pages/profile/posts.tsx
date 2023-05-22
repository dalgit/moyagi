import { useRecoilValue } from 'recoil'
import { useUserPosts } from '@/components/Post/hooks/useUserPosts'
import { PostList } from '@/components/Post/PostList'
import RegistrationList from '@/components/Registration/RegistrationList/RegistrationList'
import { userIdSelector } from '@/recoil/user'

const UserPostsPage = () => {
  const userId = useRecoilValue(userIdSelector)
  const { data: posts = [] } = useUserPosts(userId || '')

  if (!posts.length) return null

  return (
    <div>
      <h2>내 게시물</h2>
      <PostList posts={posts} />
    </div>
  )
}

export default UserPostsPage
