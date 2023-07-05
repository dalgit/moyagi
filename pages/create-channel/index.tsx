import { withAuth } from 'components/common'
import { CreateChannelTemplate, Layout, MainHeader } from 'components/Template'

const CreateChannelPage = () => {
  return (
    <Layout>
      <MainHeader />
      <CreateChannelTemplate />
    </Layout>
  )
}

export default withAuth(CreateChannelPage, {
  redirectType: 'unAuthenticated',
  path: '/login',
})
