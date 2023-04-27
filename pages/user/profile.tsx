import moment from 'moment'
import { GetServerSideProps } from 'next/types'
import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { usePatchJoinRequestStatus } from '@/hooks/mutations/usePatchJoinRequestsStatus'
import { useGetChannelJoinRequests } from '@/hooks/queries/useGetChannelJoinRequests'
import { useGetJoinnedChannels } from '@/hooks/queries/useGetJoinnedChannels'
import { useGetMyJoinRequests } from '@/hooks/queries/useGetMyJoinRequests'
import { useGetMyPosts } from '@/hooks/queries/useGetMyPosts'
import { userSelector } from '@/recoil/user'
import createServerInstance from '@/utils/axios/server'

const UserProfilePage = ({ userInfo }: any) => {
  const [clickedChannelId, setClickedChannelId] = useState<string>('')
  const user = useRecoilValue(userSelector)

  const { data: posts } = useGetMyPosts()
  const { data: joinRequests } = useGetMyJoinRequests()
  const { data: joinnedChannels } = useGetJoinnedChannels()
  const { data: channelJoinRequests } = useGetChannelJoinRequests(
    clickedChannelId,
    { enabled: !!clickedChannelId },
  )

  const managedChannels = joinnedChannels?.filter(
    (channel) => channel.manager === user?._id,
  )

  const subscribedChannels = joinnedChannels?.filter(
    (channel) => channel.manager !== user?._id,
  )

  const handleChannelClick = async (channelId: string) => {
    setClickedChannelId(channelId)
  }

  const handleJoinRequestStatus = async (
    requestId: string,
    channelId: string,
    isApproved: boolean,
  ) => {
    const status = isApproved ? 'approve' : 'reject'
    patchJoinRequestStatusMutate({ channelId, requestId, status })
  }

  const { mutate: patchJoinRequestStatusMutate } = usePatchJoinRequestStatus()

  return (
    <div>
      <h3>내정보</h3>
      <div>{user?.name}</div>
      <h3>운영중인 채널</h3>
      {managedChannels?.map((channel) => {
        return (
          <>
            <p
              key={channel._id}
              onClick={() => handleChannelClick(channel._id)}
            >
              {channel?.name}
            </p>
            {channelJoinRequests?.map((request) => {
              return (
                <div key={request._id}>
                  닉네임: {request.requestor.name}
                  메시지: {request.message}
                  <button
                    onClick={() =>
                      handleJoinRequestStatus(request._id, channel._id, true)
                    }
                  >
                    승인
                  </button>
                  <button
                    onClick={() =>
                      handleJoinRequestStatus(request._id, channel._id, false)
                    }
                  >
                    거절
                  </button>
                  ss
                </div>
              )
            })}
          </>
        )
      })}
      <h3>가입한 채널</h3>
      {subscribedChannels?.map((channel) => {
        return <p key={channel._id}>{channel?.name}</p>
      })}
      <div>
        <h3>가입심사중인 채널</h3>
        {joinRequests?.map((request) => {
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
      {posts?.map((post) => (
        <div>{post.content}</div>
      ))}
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
