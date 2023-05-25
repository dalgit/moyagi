import { ParsedUrlQuery } from 'querystring'
import { QueryClient, dehydrate } from '@tanstack/react-query'
import { GetServerSideProps } from 'next/types'
import { useMember } from '@/components/Channel/hooks/useMember'
import Layout from '@/components/Layout/Layout'
import ChannelTemplate from '@/components/Template/ChannelTemplate/ChannelTemplate'
import { useChannel } from '@/hooks/queries/useChannel'
import { IChannel } from '@/types/channel'
import createServerInstance from '@/utils/axios/server'
import { channelKeys } from '@/utils/queryKeys/channel'

export interface IParams extends ParsedUrlQuery {
  slug: string
}

const ChannelPage = ({ slug }: { slug: string }) => {
  const { data: channel = {} as IChannel } = useChannel(slug)
  const [isMember] = useMember(channel)
  const shouldFetchPosts = channel.isPublic || isMember

  return (
    <Layout>
      <ChannelTemplate channel={channel} shouldFetchPosts={shouldFetchPosts} />
    </Layout>
  )
}

export default ChannelPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context
  const { slug } = params as IParams

  const server = createServerInstance(context)

  const queryClient = new QueryClient()

  try {
    await queryClient.fetchQuery(channelKeys.detail(slug), () =>
      server
        .get('http://localhost:3000/api/channels', {
          params: { channelAddress: slug },
        })
        .then((res) => res.data),
    )
    return {
      props: { dehydratedProps: dehydrate(queryClient), slug },
    }
  } catch {
    return { notFound: true }
  }
}
