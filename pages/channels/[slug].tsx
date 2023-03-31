import { ParsedUrlQuery } from 'querystring'
import axios from 'axios'
import { GetServerSideProps } from 'next/types'
import PostCreateForm from '@/components/PostForm/PostCreateForm'

export interface IParams extends ParsedUrlQuery {
  slug: string
}

const ChannelPage = ({ channel, posts, isMember }: any) => {
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
  const { params, req } = context

  const { slug } = params as IParams

  axios.defaults.headers.Cookie = req.headers.cookie || ''

  const { channel, isMember } = await axios
    .get('http://localhost:3000/api/getChannelData', {
      params: {
        channelAddress: slug,
      },
    })
    .then((res) => res.data)

  if (!channel.isPublic && !isMember) {
    return {
      props: { channel, isMember },
    }
  }

  const posts = await axios
    .get('http://localhost:3000/api/getChannelPosts', {
      params: {
        channelId: channel._id,
      },
    })
    .then((res) => res.data)

  return {
    props: { channel, isMember, posts },
  }
}
