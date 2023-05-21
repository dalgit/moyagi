import useManagedChanneles from './hooks'
import ChannelList from '../ChannelList/ChannelList'

const ManagedCahnnels = () => {
  const { channels } = useManagedChanneles()
  console.log(channels)
  return <ChannelList channels={channels} />
}

export default ManagedCahnnels
