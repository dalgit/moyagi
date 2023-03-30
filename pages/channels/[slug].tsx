import { ParsedUrlQuery } from 'querystring'
import axios from 'axios'
import { GetServerSideProps } from 'next/types'
import PostCreateForm from '@/components/PostForm/PostCreateForm'

export interface IParams extends ParsedUrlQuery {
  slug: string
}

      <PostCreateForm channelId={channel._id} />
}

export default ChannelPage

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params as IParams

  const channel = await axios
    .get('http://localhost:3000/api/getChannelData', {
      params: {
        channelAddress: slug,
      },
    })
    .then((res) => res.data.channel)

  return {
    props: { channel },
  }
}
