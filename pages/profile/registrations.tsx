import { Suspense } from 'react'
import { Spinner, withAuth } from 'components/common'
import ApiErrorBoundary from 'components/common/Boundary/ApiErrorBoundary/ApiErrorBoundary'
import {
  Layout,
  MainHeader,
  UserRegistrationTemplate,
} from 'components/Template'

const UserRegistrationsPage = () => {
  return (
    <Layout>
      <MainHeader />
      <ApiErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <UserRegistrationTemplate />
        </Suspense>
      </ApiErrorBoundary>
    </Layout>
  )
}

export default withAuth(UserRegistrationsPage, {
  redirectType: 'unAuthenticated',
  path: '/login',
})
