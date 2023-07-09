import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Spinner } from 'components/common'
import { ApiErrorBoundary } from 'components/common/Boundary'
import { Layout, MainHeader } from 'components/Template'

const UserProfileTemplate = dynamic(
  () =>
    import('components/Template').then((module) => module.UserProfileTemplate),
  { ssr: false },
)

const UserDetailPage = () => {
  return (
    <Layout>
      <MainHeader />
      <ApiErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <UserProfileTemplate />
        </Suspense>
      </ApiErrorBoundary>
    </Layout>
  )
}

export default UserDetailPage
