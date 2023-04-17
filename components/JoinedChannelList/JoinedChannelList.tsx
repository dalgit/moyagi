import Link from 'next/link'
import { useEffect, useState } from 'react'
import client from '@/utils/axios/axios'

const JoinedChannelList = () => {
  const [channels, setChannels] = useState([])
  useEffect(() => {
    client
      .get('/users/me/channels')
      .then((res) => setChannels(res.data.joinedChannels))
      .catch((e) => console.log(e))
  }, [])

  return (
    <>
      <p>내가 가입한 채널들</p>
      <ul>
        {channels.map((channel) => (
          <Link href={`/channels/${channel.address}`} key={channel._id}>
            {channel.name}
          </Link>
        ))}
      </ul>
    </>
  )
}

export default JoinedChannelList
