import { useRouter } from 'next/router'
import {
  NotificationBox,
  BoxType,
} from 'components/common/NotificationBox/NotificationBox'
import Layout from 'components/Layout/Layout'
import UserProfileTemplate from 'components/Template/UserProfileTemplate/UserProfileTemplate'
import { useUser } from 'hooks/queries/useUser'

const UserDetailPage = () => {
  const router = useRouter()
  const { slug } = router.query as { slug: string }
  const { data: user } = useUser(slug)

  if (!user) {
    return (
      <NotificationBox title="존재하지 않는 유저입니다." type={BoxType.sorry} />
    )
  }

  return (
    <Layout>
      <UserProfileTemplate user={user} />
    </Layout>
  )
}

export default UserDetailPage
