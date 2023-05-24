import { useRouter } from 'next/router'
import useManagedChanneles from '@/components/Channel/hooks/useManagedChannels'
import UserChannelsTemplate from '@/components/Template/UserChannelsTemplate/UserChannelsTemplate'

const UserChannelsPage = () => {
  const { data: channels } = useManagedChanneles()
  const router = useRouter()
  const channelId = router.query.channelId

  const handleChannelClick = () => {}
  return <UserChannelsTemplate channels={channels} channelId={channelId} />
}

export default UserChannelsPage
