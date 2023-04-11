import { ParsedUrlQuery } from 'querystring'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next/types'
import { useState, useEffect } from 'react'
import JoinRequestForm from '@/components/JoInRequestForm/JoinRequestForm'
import PostCreateForm from '@/components/PostForm/PostCreateForm'
import useToggle from '@/hooks/useToggle'
import client from '@/utils/axios/axios'
import createServerInstance from '@/utils/axios/server'

export interface IParams extends ParsedUrlQuery {
  slug: string
}

const ChannelPage = ({ channel, userInfo }: any) => {
  const [posts, setPosts] = useState([])
  const { isActive, toggle: handleModal } = useToggle()

  const { push } = useRouter()

  const getIsMember = () => {
    if (userInfo) {
      return channel?.members.some(
        (member: any) => member._id === userInfo?._id,
      )
    }
    return false
  }
  const isMember = getIsMember()

  useEffect(() => {
    if (channel.isPublic || isMember) {
      client
        .get('/getChannelPosts', {
          params: {
            channelId: channel._id,
          },
        })
        .then((res) => setPosts(res.data))
    }
  }, [channel._id, channel.isPublic, isMember])

  const handleJoinRequestClick = () => {
    if (!userInfo) {
      push('/login')
    } else {
      handleModal()
    }
  }
  return (
    <div>
      <JoinRequestForm
        isModalOpen={isActive}
        closeModal={handleModal}
        channelId={channel._id}
        isPublic={channel.isPublic}
      />
      <div>{channel.name}</div>
      <div>{channel.description}</div>
      <div>매니저 : {channel.manager.name}</div>
      <PostCreateForm channelId={channel._id} />
      {!isMember && <button onClick={handleJoinRequestClick}>가입하기</button>}
      {posts?.map((post) => (
        <>
          <div>{post.author.name}</div>
          <div>{post.content}</div>
        </>
      ))}
    </div>
  )
}

export default ChannelPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context
  const { slug } = params as IParams

  const server = createServerInstance(context)

  const channel = await server
    .get('http://localhost:3000/api/getChannelData', {
      params: {
        channelAddress: slug,
      },
    })
    .then((res) => res.data.channel)

  const userInfo = await server
    .get('http://localhost:3000/api/getUserInfo', {
      params: {
        channelAddress: slug,
      },
    })
    .then((res) => {
      return res.data
    })
    .catch(() => {
      return null
    })

  return {
    props: { channel, userInfo },
  }
}
