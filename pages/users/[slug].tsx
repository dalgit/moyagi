import { useRouter } from 'next/router'
import { Spinner } from 'components/common'
import {
  Layout,
  UserProfileTemplate,
  NotFoundTemplate,
} from 'components/Template'
import { useUser } from 'hooks/user'

const UserDetailPage = () => {
  const router = useRouter()
  const { slug } = router.query as { slug: string }
  const { data: user, isLoading, isSuccess, isError } = useUser(slug)

  return (
    <Layout>
      {isLoading && <Spinner />}
      {isSuccess && <UserProfileTemplate user={user} />}
      {isError && <NotFoundTemplate description="유저가 존재하지 않습니다." />}
    </Layout>
  )
}

export default UserDetailPage
