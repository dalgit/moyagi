import { QueryClient, dehydrate } from '@tanstack/react-query'
import { GetServerSideProps } from 'next/types'
import { ChannelTemplate, Layout } from 'components/Template'
import { useChannel } from 'hooks/channel'
import { IChannel } from 'types/channel'
import { IParams } from 'types/common'
import createServerInstance from 'utils/axios/server'
import { channelKeys } from 'utils/queryKeys/channel'

const ChannelPage = ({ slug }: { slug: string }) => {
  const { data: channel = {} as IChannel } = useChannel(slug)

  return (
    <Layout>
      <ChannelTemplate channel={channel} />
    </Layout>
  )
}

export default ChannelPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params as IParams
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
