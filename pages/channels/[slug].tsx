import { ParsedUrlQuery } from 'querystring'
import { GetServerSideProps } from 'next/types'
import { useState, useEffect } from 'react'
import PostCreateForm from '@/components/PostForm/PostCreateForm'
import client from '@/utils/axios/axios'
import createServerInstance from '@/utils/axios/server'

export interface IParams extends ParsedUrlQuery {
  slug: string
}

const ChannelPage = ({ channel, userInfo }: any) => {
  const [posts, setPosts] = useState([])

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

  return (
    <div>
      <div>{channel.name}</div>
      <div>{channel.description}</div>
      <div>매니저 : {channel.manager.name}</div>
      <PostCreateForm channelId={channel._id} />

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
