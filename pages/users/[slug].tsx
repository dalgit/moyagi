import { useRouter } from 'next/router'
import { NotificationBox, BoxType } from 'components/common'
import { Layout, UserProfileTemplate } from 'components/Template'
import { useUser } from 'hooks/user'

const UserDetailPage = () => {
  const router = useRouter()
  const { slug } = router.query as { slug: string }
  const { data: user } = useUser(slug)

  return (
    <Layout>
      {user ? (
        <UserProfileTemplate user={user} />
      ) : (
        <NotificationBox
          title="존재하지 않는 유저입니다."
          type={BoxType.sorry}
        />
      )}
    </Layout>
  )
}

export default UserDetailPage
