import { GetServerSideProps } from 'next/types'
import { useState, useEffect } from 'react'
import client from '@/utils/axios/axios'
import createServerInstance from '@/utils/axios/server'

const UserProfilePage = ({ userInfo }: any) => {
  const [managedChannels, setManagedChannels] = useState<any[]>([])
  const [subscribedChannels, setSubscribedChannels] = useState<any[]>([])

  useEffect(() => {
    const handleChannels = async () => {
      const joinedChannels = await client
        .get('/getJoinedChannels')
        .then((res) => res.data.joinedChannels)

      const managedChannels2: any[] = []
      const subscribedChannels2: any[] = []

      joinedChannels.forEach((channel: any) =>
        channel.manager === userInfo._id
          ? managedChannels2.push(channel)
          : subscribedChannels2.push(channel),
      )

      setManagedChannels(managedChannels2)
      setSubscribedChannels(subscribedChannels2)
    }

    handleChannels()
  }, [userInfo._id])

  return (
    <div>
      <h3>내정보</h3>
      <div>{userInfo.name}</div>
      <h3>운영중인 채널</h3>
      {managedChannels.map((channel) => {
        return <p key={channel._id}>{channel?.name}</p>
      })}
      <h3>가입한 채널</h3>
      {subscribedChannels.map((channel) => {
        return <p key={channel._id}>{channel?.name}</p>
      })}
      <h3>가입심사중인 채널</h3>
      <h3>내 글 보기</h3>
      <h3>내 댓글 보기</h3>
    </div>
  )
}

export default UserProfilePage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const server = createServerInstance(context)

  try {
    const userInfo = await server.get('/getUserInfo').then((res) => res.data)

    return {
      props: { userInfo },
    }
  } catch {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }
}
