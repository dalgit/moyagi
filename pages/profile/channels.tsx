import { useRouter } from 'next/router'
import useManagedChanneles from '@/components/Channel/hooks/useManagedChannels'
import Layout from '@/components/Layout/Layout'
import UserChannelsTemplate from '@/components/Template/UserChannelsTemplate/UserChannelsTemplate'

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
