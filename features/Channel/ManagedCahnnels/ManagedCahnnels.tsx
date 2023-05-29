import { ChannelList } from 'features/Channel'
import useManagedChanneles from 'hooks/channel/useManagedChannels'

const ManagedCahnnels = () => {
  const { data: channels } = useManagedChanneles()
  return <ChannelList channels={channels} />
}

export default ManagedCahnnels
