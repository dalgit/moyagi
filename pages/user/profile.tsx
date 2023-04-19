import moment from 'moment'
import { GetServerSideProps } from 'next/types'
import { useState, useEffect } from 'react'
import client from '@/utils/axios/axios'
import createServerInstance from '@/utils/axios/server'

const UserProfilePage = ({ userInfo }: any) => {
  const [managedChannels, setManagedChannels] = useState<any[]>([])
  const [subscribedChannels, setSubscribedChannels] = useState<any[]>([])
  const [joinRequests, setJoinRequests] = useState([])
  const [channelJoinRequests, setChannelJoinRequests] = useState([])

  useEffect(() => {
    const handleChannels = async () => {
      const joinedChannels = await client
        .get('/users/me/channels')
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
    const handleJoinRequests = async () => {
      await client
        .get('/users/me/join-requests')
        .then((res) => setJoinRequests(res.data.joinRequests))
    }
    handleChannels()
    handleJoinRequests()
  }, [userInfo._id])

  const handleChannelRequests = async (channelId: string) => {
    await client
      .get(`/channels/${channelId}/join-requests`)
      .then((res) => setChannelJoinRequests(res.data.joinRequests))
  }

  const handleRequest = async (
    requestId: string,
    channelId: string,
    isApproved: boolean,
  ) => {
    const status = isApproved ? 'approve' : 'reject'
    await client.patch(`/channels/${channelId}/join-requests/${requestId}`, {
      status,
    })
  }

  return (
    <div>
      <h3>내정보</h3>
      <div>{userInfo.name}</div>
      <h3>운영중인 채널</h3>
      {managedChannels.map((channel) => {
        return (
          <>
            <p
              key={channel._id}
              onClick={() => handleChannelRequests(channel._id)}
            >
              {channel?.name}
            </p>
            {channelJoinRequests.map((request) => {
              return (
                <div key={request._id}>
                  닉네임: {request.requestor.name}
                  메시지: {request.message}
                  <button
                    onClick={() =>
                      handleRequest(request._id, channel._id, true)
                    }
                  >
                    승인
                  </button>
                  <button
                    onClick={() =>
                      handleRequest(request._id, channel._id, false)
                    }
                  >
                    거절
                  </button>
                </div>
              )
            })}
          </>
        )
      })}
      <h3>가입한 채널</h3>
      {subscribedChannels.map((channel) => {
        return <p key={channel._id}>{channel?.name}</p>
      })}
      <div>
        <h3>가입심사중인 채널</h3>
        {joinRequests.map((request) => {
          return (
            <div key={request._id}>
              <p>채널이름 : {request.channel.name}</p>
              <p>채널설명 : {request.channel.description}</p>
              <p>상태: {request.status}</p>
              <p>요청일시: {moment(request.time).format('YYYY-MM-DD HH:mm')}</p>
            </div>
          )
        })}
      </div>
      <h3>내 글 보기</h3>
      <h3>내 댓글 보기</h3>
    </div>
  )
}

export default UserProfilePage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const server = createServerInstance(context)

  try {
    const userInfo = await server.get('/users/me').then((res) => res.data)

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
