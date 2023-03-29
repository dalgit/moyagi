import { ParsedUrlQuery } from 'querystring'
import axios from 'axios'
import { GetServerSideProps } from 'next/types'

export interface IParams extends ParsedUrlQuery {
  slug: string
}

const ChannelPage = ({ channel }) => {
  return <div>sss</div>
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
