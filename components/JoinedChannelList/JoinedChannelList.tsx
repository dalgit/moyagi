import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const JoinedChannelList = () => {
  const [channels, setChannels] = useState([])
  useEffect(() => {
    axios
      .get('/api/getJoinedChannels')
      .then((res) => setChannels(res.data.joinedChannels))
  }, [])

  return (
    <ul>
      {channels.map((channel) => (
        <Link href={`/channels/${channel.address}`} key={channel._id}>
          {channel.name}
        </Link>
      ))}
    </ul>
  )
}

export default JoinedChannelList
