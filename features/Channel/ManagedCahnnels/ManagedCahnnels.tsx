import { ChannelList } from 'features/Channel'
import useManagedChanneles from '../hooks/useManagedChannels'

const ManagedCahnnels = () => {
  const { data: channels } = useManagedChanneles()
  return <ChannelList channels={channels} />
}

export default ManagedCahnnels
