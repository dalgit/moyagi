import { useRouter } from 'next/router'
import Layout from 'components/Layout/Layout'
import UserChannelsTemplate from 'components/Template/UserChannelsTemplate/UserChannelsTemplate'
import useManagedChanneles from 'features/Channel/hooks/useManagedChannels'

const UserChannelsPage = () => {
  const { data: channels } = useManagedChanneles()
  const router = useRouter()
  const channelId = router.query.channelId

  const handleChannelClick = () => {}
  return (
    <Layout>
      <UserChannelsTemplate channels={channels} channelId={channelId} />
    </Layout>
  )
}

export default UserChannelsPage