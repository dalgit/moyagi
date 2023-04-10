import Link from 'next/link'
import { useEffect, useState } from 'react'
import client from '@/utils/axios/axios'

const JoinedChannelList = () => {
  const [channels, setChannels] = useState([])
  useEffect(() => {
    client
      .get('/getJoinedChannels')
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
